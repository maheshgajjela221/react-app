# Backend (Node.js)
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ Automatically replace localhost and update port from 3000 to 3011
RUN find . -type f -name "*.js" -exec sed -i 's/localhost/0.0.0.0/g' {} + && \
    find . -type f -name "*.js" -exec sed -i 's/3000/3175/g' {} +

# ✅ Expose the new backend port
EXPOSE 3175

# ✅ Set environment variable for Node.js
ENV PORT=3175

# ✅ Start backend server
CMD ["node", "server.js"]
