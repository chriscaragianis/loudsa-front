FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY build/ /usr/src/app/

RUN npm install -g serve

CMD [ "serve", "-p", "4000", "." ]
