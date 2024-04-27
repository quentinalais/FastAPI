from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, LargeBinary
from sqlalchemy.orm import relationship

from database import Base
from pydantic import BaseModel


class Actor(Base):
    __tablename__ = "actor"
    actor_id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    last_update = Column(DateTime)


class Tracks(Base):
    __tablename__ = "Tracks"
    ID = Column(Integer, primary_key=True, autoincrement=True)
    filename = Column(String)
    content = Column(LargeBinary)

