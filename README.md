# FastAPI with Dev Container

This is a first test to set up a Python application inside a devcontainer. 

## Start the API

Run the following command to start the __FastAPI__. 

#### Encountered issues: 

SSH keys were not properly shared with the dev container:

To fix the issue I had to include the following command in the devcontainer.json

```
"initializeCommand": "find ~/.ssh/ -type f -exec grep -l 'PRIVATE' {} \\; | xargs ssh-add",
```