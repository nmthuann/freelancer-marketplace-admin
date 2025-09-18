# Bước 1: Build app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json và package-lock.json để cài dependency trước
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy toàn bộ source code
COPY . .

# Build production
RUN npm run build

# Bước 2: Serve bằng Nginx
FROM nginx:alpine

# Copy file build vào Nginx HTML folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config (nếu cần custom routing React Router SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
