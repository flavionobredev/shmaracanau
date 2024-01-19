FROM node:20-alpine

WORKDIR /usr/shmaracanau/app

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000