FROM node

WORKDIR /app
COPY  ./src/ ./src/
COPY package*.json index.js ./
RUN npm install
EXPOSE 8080
CMD ["npm","run","start"]