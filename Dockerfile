FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run build-prod

EXPOSE 3003

CMD [ "npm", "start" ]