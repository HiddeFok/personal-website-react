# Pull official base image
FROM node:26.10.0-alpine

# Set working directory 
WORKDIR /app

COPY . .

RUN npm install && npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

# Starting the app
CMD ["npm", "./dist/server/entry.mjs"]
