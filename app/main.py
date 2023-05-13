from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return "Hello World"

@app.get("/French")
def read_root():
    return "Bonjour, en francais."

@app.get("/English")
def read_root():
    return "Hello, in english."