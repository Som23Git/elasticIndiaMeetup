FROM node:20-alpine AS build
RUN apk add --no-cache tini
WORKDIR /app

COPY package.json package-lock.json ./

# Requires Docker BuildKit
RUN --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

COPY src ./src

# Runtime-stage
FROM node:20-alpine
ENV NODE_ENV=production PORT=4000
WORKDIR /app

COPY --from=build /sbin/tini /sbin/tini
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/src ./src
COPY --from=build --chown=node:node /app/package.json ./package.json

RUN mkdir -p /app/logs && chown node:node /app/logs
USER node

EXPOSE 4000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "src/server.js"]
