#  Build & Dependencies
FROM node:20-alpine AS build

RUN apk add --no-cache tini

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY src ./src

#Prod-Image
FROM node:20-alpine

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /sbin/tini /sbin/tini

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/src ./src
COPY --from=build /app/package.json ./package.json

RUN mkdir -p /app/logs && chown -R node:node /app

USER node

EXPOSE 3000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "src/server.js"]
