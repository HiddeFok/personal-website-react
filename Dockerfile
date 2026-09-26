# Pull official base image
FROM node:26.10.0-alpine AS build

# Set working directory 
WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80
