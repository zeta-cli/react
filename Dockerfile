FROM node:13.12.0-alpine

RUN apk add git

# set working directory
WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH

# COPY package.json .ko/
# COPY package-lock.json ./
# RUN npm install --silent

# COPY src ./

# start app
# CMD ["npm", "start"]

#https://mherman.org/blog/dockerizing-a-react-app/


# production environment
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
# docker build -f Dockerfile.prod -t sample:prod .