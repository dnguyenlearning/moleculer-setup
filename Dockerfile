FROM node:10

MAINTAINER lam.do@knorex.com

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]