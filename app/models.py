from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime, LargeBinary
from sqlalchemy.orm import relationship

from database import Base
from pydantic import BaseModel


class Tracks(Base):
    __tablename__ = "Tracks"
    ID = Column(Integer, primary_key=True, autoincrement=True)
    filename = Column(String)
    content = Column(LargeBinary)
    CID = Column(String)
    ETag = Column(String)


