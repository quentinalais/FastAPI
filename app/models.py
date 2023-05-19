from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from database import Base

class Actor(Base):
    __tablename__ = "actor"

    actor_id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    last_update = Column(DateTime)



