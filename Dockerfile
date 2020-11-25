FROM node
LABEL maintainer=gaurav.kapoor@outlook.com
ENV MONGO_DB_CONNECTION=
WORKDIR /usr/src/noteid
COPY package*.json ./
RUN npm install
COPY ./dist ./dist
EXPOSE 3000
CMD ["node" , "./dist/index.js"]