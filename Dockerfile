# Based on this tutorial:
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Open the port
EXPOSE 8080

# Define the command to run the app
CMD [ "npm", "start" ]
