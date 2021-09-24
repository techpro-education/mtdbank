FROM node:12.18.1
WORKDIR /app
COPY package.json ./
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["npm", "start"]