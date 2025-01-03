FROM node:14

WORKDIR /app

COPY index.js .
COPY package.json .
COPY public ./public

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]
