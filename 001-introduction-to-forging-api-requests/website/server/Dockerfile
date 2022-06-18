FROM node:16

LABEL "lesson.number"=1

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "start"]