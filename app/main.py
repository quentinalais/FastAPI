from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "Hola como ca va Quentin?"}



@app.get("/greeting")
def read_root():
    return "Greeting message !"


@app.get("/bonjourtoutlemonde")
def bonjour():
    return "bonjour vous tous"



@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
