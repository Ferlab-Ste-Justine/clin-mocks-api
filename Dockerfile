FROM node:18-alpine
WORKDIR /app
COPY src ./src
COPY package*.json ./
RUN npm ci --omit=dev
ENV NODE_ENV=production
EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]
