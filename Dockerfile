FROM node:12

RUN apt-get update

WORKDIR /app

COPY package*.json ./

RUN npm ci

ENV PATH="./node_modules/.bin:${PATH}"