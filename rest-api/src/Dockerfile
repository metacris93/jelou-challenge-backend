FROM node:20-alpine3.19

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

USER node

RUN npm install
# RUN npm run migrations:run
# RUN npm run seeder:run

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]