# FastAPI with Dev Container 


# Encountered issues: 

SSH keys were not properly shared with the dev container:

To fix the issue I had to include the following command in the devcontainer.json

```
"initializeCommand": "find ~/.ssh/ -type f -exec grep -l 'PRIVATE' {} \\; | xargs ssh-add",
```