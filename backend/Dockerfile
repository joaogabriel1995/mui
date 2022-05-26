FROM node:18

WORKDIR /usr/src/app
RUN chown node:node /usr/src/app
USER node
COPY --chown=node:node ./package*.json ./
RUN npm install
COPY --chown=node:node ./ .
RUN npm run db:generate

WORKDIR /usr/src/app
CMD ["npm", "run", "tsc"]

#CMD ["sleep", "infinity"]