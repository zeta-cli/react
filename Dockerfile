FROM node:13.12.0-alpine

RUN apk add git

# set working directory
WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent

# COPY src ./

# start app
# CMD ["npm", "start"]