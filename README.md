# Tracks API

Welcome to the Tracks API project! This project provides an API for managing tracks.

## Docker Compose Files

This project includes two Docker Compose files:

- `docker-compose.yml`: Use this file to run the application in a normal production environment.
- `docker-compose.debug.yml`: Use this file for debugging purposes. It includes configurations to enable debugging with debugpy.

## GitHub Action Pipeline

This project is equipped with a GitHub Actions pipeline that automates the build and deployment process:

1. **Build Docker Image**: The pipeline builds the Docker image for the application.
2. **Push to DockerHub**: After successful build, the pipeline pushes the Docker image to DockerHub.
3. **Deploy to Raspberry Pi**: The pipeline pulls the Docker image on your self-hosted Raspberry Pi 4 for deployment.

## Ngrok for Tunneling

To expose your Raspberry Pi 4 to the outside network, this project uses Ngrok to create a secure tunnel:

1. **Port Forwarding**: Ngrok forwards traffic from a public URL to a port on your Raspberry Pi 4.
2. **Secure Connection**: Ngrok ensures secure connections between your Raspberry Pi 4 and external clients.

## Getting Started

To get started with the Tracks API, follow these steps:

1. Clone this repository to your local machine.
2. Choose the appropriate Docker Compose file (`docker-compose.yml` for normal usage, or `docker-compose.debug.yml` for debugging).
3. Run `docker-compose up` with the chosen Docker Compose file to start the application.
4. Access the API endpoints at the specified ports.

## Contributing

Contributions to the Tracks API project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### Link 
https://kingfish-fancy-easily.ngrok-free.app
