# Patawa Music APP

Welcome to the Patawa Music project! This project provides an API for managing tracks.

https://patawa-music.netlify.app

<img width="1137" alt="Capture d’écran 2024-07-12 à 23 03 25" src="https://github.com/user-attachments/assets/0a8c8a5e-1590-480d-b276-0a14b1f90945">


## Docker Compose Files

This project includes two Docker Compose files:

- **docker-compose.yml**: Use this file to run the application in a normal production environment.
- **docker-compose.debug.yml**: Use this file for debugging purposes. It includes configurations to enable debugging with debugpy.

## GitHub Actions Pipeline

This project is equipped with a GitHub Actions pipeline that automates the build and deployment process on a self-hosted Raspberry Pi 4, where all Docker containers are tested:

1. **Build Docker Image**: The pipeline builds the Docker image for the application.
2. **Push to DockerHub**: After a successful build, the pipeline pushes the Docker image to DockerHub.
3. **Deploy to Raspberry Pi**: The pipeline pulls the Docker image on your self-hosted Raspberry Pi 4 for deployment and testing.

## Hosting and Deployment

To deploy this application for free, the following services were used:

- **Neon.tech**: Used to host the PostgreSQL database.
- **Render**: Used to host the FastAPI backend.
- **Netlify**: Used to host the React frontend.

## Getting Started

To get started with the Tracks API, follow these steps:

1. **Clone this repository** to your local machine:
    ```sh
    git clone <repository_url>
    ```
2. **Choose the appropriate Docker Compose file**:
    - Use `docker-compose.yml` for normal usage.
    - Use `docker-compose.debug.yml` for debugging.

3. **Run the application**:
    ```sh
    docker-compose up -f <chosen_docker_compose_file>
    ```

## Contributing

Contributions to the Tracks API project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

