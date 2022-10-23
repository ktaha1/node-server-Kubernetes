FROM alpine:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN apk add --update nodejs npm
RUN npm install

# Bundle app source
COPY . .

#Expose Port
EXPOSE 3001

CMD [ "npm", "start" ]
