FROM node:18.1-alpine as builder

WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

COPY src ./src

RUN ls -a

RUN npm install

RUN npm run build

## this is stage two

FROM node:18.1-alpine

WORKDIR /app

COPY package.json ./
COPY prisma ./prisma
COPY .env ./

RUN npm install --only=production

COPY --from=builder /app/dist .

RUN npm install pm2 -g

RUN npx prisma generate

EXPOSE 80

CMD ["pm2-runtime","server.js"]