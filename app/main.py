from typing import Union, List, Annotated
import os 

from fastapi import Depends, FastAPI, HTTPException,  File, UploadFile
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from fastapi.responses import FileResponse

import models
from database import SessionLocal, engine, Base
from starlette.background import BackgroundTasks

from pydantic import BaseModel


app = FastAPI(title="Raspberry PI Hosted Fast API")

Base.metadata.create_all(bind=engine)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def clean_temp_folder():
    for file in os.listdir("temp"):
        os.remove(os.path.join("temp",file)) 
    os.removedirs("temp") 
    return

@app.get("/tracks/",)
def get_tracks( db: Session = Depends(get_db)):
    tracks = db.query(models.Tracks).all()
    result = [ { "filename":track.filename, "ID":track.ID} for track in tracks]
    return result


@app.get("/track/{track_id}")
async def read_track(track_id:int,background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    track = db.query(models.Tracks).filter(models.Tracks.ID==track_id).first()
    os.mkdir("temp")
    file_path = f"temp/{track.filename}"
    with open(file_path,mode="wb") as file:
        file.write(track.content)
    background_tasks.add_task(clean_temp_folder)
    return FileResponse(path=file_path, filename=track.filename, media_type='text/mp3')
   
@app.delete("/track/{track_id}")
async def delete_track(track_id:int, db: Session = Depends(get_db)):
    track = db.query(models.Tracks).filter(models.Tracks.ID==track_id).first()
    filename = track.filename
    db.delete(track)
    db.commit()
    return f"{filename} deleted."

@app.post("/upload_track/")
async def create_upload_file(file: UploadFile = File(...), db:Session = Depends(get_db)):
    content =  await file.read()
    new_track = models.Tracks(filename=file.filename, content=content)
    db.add(new_track)
    db.commit()
    db.refresh(new_track)
    return {"filename": file.filename}