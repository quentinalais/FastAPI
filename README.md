# FastAPI with Dev Container

This is a first test to set up a Python application inside a devcontainer. 

## Start the API

Run the following command to start the __FastAPI__. 
```
uvicorn main:app --host 0.0.0.0 --port 80
```

## Build image with arm:
- docker buildx build --platform linux/arm/v7 -t rasp-fast-app-image . 


### Link 
https://kingfish-fancy-easily.ngrok-free.app/docs
