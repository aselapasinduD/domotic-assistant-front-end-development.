FROM node:24-alpine

ENV PORT=3000
# ENV NODE_ENV=production

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]