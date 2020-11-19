FROM node:alpine AS builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npx lerna bootstrap
RUN npm run build


# Final stage build, this will be the container
# that we will deploy to production
FROM node:alpine
WORKDIR /app
RUN apk --no-cache add ca-certificates
COPY --from=builder /app ./
RUN chmod +x ./docker_entry.sh
EXPOSE 8080
CMD ["node", "packages/server/build/index.js"]

