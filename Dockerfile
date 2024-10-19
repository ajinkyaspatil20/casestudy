# Use a lightweight web server image
FROM nginx:alpine

# Copy your web application files to the Nginx server
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
