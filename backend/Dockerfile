FROM node:20-alpine

WORKDIR /app

# Copy dependency specifications and install production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy application source code
COPY . .

# Expose backend port
EXPOSE 5000

# Environment variables
ENV PORT=5000 \
    NODE_ENV=production

# Healthcheck for container engines & Kubernetes
HEALTHCHECK --interval=15s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/healthz || exit 1

CMD ["node", "server.js"]
