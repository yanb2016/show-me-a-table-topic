FROM node:10
ADD . /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD ["node", "app.js"]
EXPOSE 3000
