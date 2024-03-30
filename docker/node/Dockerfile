FROM node:12

WORKDIR /srv/app

COPY package.json /srv/app/package.json

RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g firebase-tools

COPY . /srv/app
