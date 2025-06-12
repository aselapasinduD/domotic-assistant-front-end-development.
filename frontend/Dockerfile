FROM node:24-alpine

WORKDIR /frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5768

CMD ["npm", "run", "dev"]