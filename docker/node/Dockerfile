##########################
## Builder Container
##########################
FROM node:17.9.0-alpine3.14 as builder

WORKDIR /sample-storybook

COPY package.json package-lock.json ./

RUN npm i --no-progress

COPY . .

RUN npm run build

##########################
## Application Container
##########################
FROM node:17.9.0-alpine3.14

WORKDIR /sample-storybook

COPY --from=builder /sample-storybook ./

CMD ["npm", "run", "start"]
