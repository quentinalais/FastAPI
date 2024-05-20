# Stage 1: Build the React app
FROM node:14-alpine as builder

# Set working directory
WORKDIR /

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY ./ ./

# Build the React app
RUN npm run build

# Stage 2: Create the production environment
FROM nginx:alpine

# Copy the built React app from the previous stage
COPY --from=builder /build /usr/share/nginx/html

# Copy nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
