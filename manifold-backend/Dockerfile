
FROM node:18-alpine3.18
WORKDIR /src

COPY . .
RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start:dev" ]