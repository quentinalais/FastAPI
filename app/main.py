from typing import Union, List, Annotated


from fastapi import Depends, FastAPI, HTTPException,  File, UploadFile
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder

import crud, models
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

@app.get("/actors/", )
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_actors(db, skip=skip, limit=limit)
    return users

@app.get("/tracks/",)
def get_tracks( db: Session = Depends(get_db)):
    tracks = db.query(models.Tracks).all()
    for track in tracks:
        print(dict(track))

    return "Hello World"

@app.post("/upload_track/")
async def create_upload_file(file: UploadFile = File(...), db:Session = Depends(get_db)):
    content =  await file.read()
    new_track = models.Tracks(ID=1, filename=file.filename, content=content)
    db.add(new_track)
    db.commit()
    db.refresh(new_track)
    return {"filename": file.filename}
