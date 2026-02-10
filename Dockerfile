# Multi-stage build for Angular SPA

# 1) Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build in production mode
RUN npm run build

# 2) Serve with Nginx
FROM nginx:1.27-alpine AS runtime

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app (browser bundle)
COPY --from=build /app/dist/angular-app/browser /usr/share/nginx/html

# Angular outputs "index.csr.html" for the browser build; Nginx expects
# "index.html" as the default index file.
RUN mv /usr/share/nginx/html/index.csr.html /usr/share/nginx/html/index.html

# Expose port
EXPOSE 80

# Default Nginx start command
CMD ["nginx", "-g", "daemon off;"]
