from typing import Union, List, Annotated


from fastapi import Depends, FastAPI, HTTPException,  File, UploadFile
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder

import models
from database import SessionLocal, engine, Base

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


@app.get("/tracks/",)
def get_tracks( db: Session = Depends(get_db)):
    tracks = db.query(models.Tracks).all()

    return "Hello World"

@app.post("/upload_track/")
async def create_upload_file(file: UploadFile = File(...), db:Session = Depends(get_db)):
    content =  await file.read()
    new_track = models.Tracks(filename=file.filename, content=content)
    db.add(new_track)
    db.commit()
    db.refresh(new_track)
    return {"filename": file.filename}
