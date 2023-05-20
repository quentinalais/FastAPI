from typing import Union, List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

import crud, models
from database import SessionLocal, engine

app = FastAPI(title="Raspberry PI Hosted Fast API")


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
