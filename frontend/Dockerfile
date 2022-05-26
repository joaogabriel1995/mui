FROM node:18

WORKDIR /usr/src/app
RUN chown node:node /usr/src/app
USER node
COPY --chown=node:node ./package*.json ./
RUN npm install
COPY --chown=node:node ./ .

CMD ["npm", "start"]

#CMD ["sleep", "infinity"]