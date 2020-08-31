FROM node:12-alpine
WORKDIR /app/src
COPY . ./
RUN ["npm","install"]
CMD ["node","index.js"]

