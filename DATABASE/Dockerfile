FROM node:latest

WORKDIR /db
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]