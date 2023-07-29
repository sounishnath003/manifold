
FROM node:18-alpine3.18

WORKDIR /src

COPY . .
RUN npm install

EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]