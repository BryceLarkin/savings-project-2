FROM node:12.4.0
RUN openssl version -v
RUN uname -a
RUN echo $POSTGRESQL_URL

ADD ./ /opt/app
WORKDIR /opt/app

USER root

RUN rm -rf node_modules \
  && npm i -g --unsafe-perm prisma2@latest  \
  && npm i -g typescript \
  && npm install \
  && prisma2 generate \
  && chown -R node /opt/app

# RUN prisma2 generate

USER node

RUN npm run build

ENV HOME_DIR=/opt/app \
  DEBUG=*

# EXPOSE 8080

CMD ["node", "./dist/src/index.js"]

# CMD ["npm", "run", "start"]
