FROM node:23-alpine

WORKDIR /src

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm start

COPY . .

EXPOSE 3000

CMD npm start
