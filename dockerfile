# syntax=docker/dockerfile:1

FROM node:latest

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npx", "serve", "-s", "build" ]