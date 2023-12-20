FROM node:latest
RUN apt-get update
RUN apt-get install -y netcat-openbsd
WORKDIR /db
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]