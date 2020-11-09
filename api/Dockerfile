FROM node:14.3.0-alpine3.11 as builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

CMD ["npm", "run", "start"]
