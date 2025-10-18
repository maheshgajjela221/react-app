# Backend (Node.js)
FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# ✅ Replace localhost with 0.0.0.0 to allow external connections
RUN find . -type f -name "*.js" -exec sed -i 's/localhost/0.0.0.0/g' {} +

# Expose backend port
EXPOSE 3175

# Environment variable for Node.js server
ENV PORT=3175

# Start backend
CMD ["node", "server.js"]
