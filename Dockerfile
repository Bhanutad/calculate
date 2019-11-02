FROM node:10

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY pakage.json .
RUN npm install
COPY . .
