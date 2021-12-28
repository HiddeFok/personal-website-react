# Pull official base image
FROM node:13.12.0-alpine

# Set working directory 
WORKDIR /app

# Add /app/node_modules/.bin to path
ENV PATH /app/node_modules/.bin:$PATH

# Installing all dependecies

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# uncomment for debugging
# RUN apk add --no-cache bash

COPY . ./

# Starting the app
CMD ["npm", "start"]