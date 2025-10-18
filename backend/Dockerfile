# Backend (Node.js)
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ Optional: replace localhost references if any
RUN find . -type f -name "*.js" -exec sed -i 's/localhost:3000/52.64.85.12:3175/g' {} +

# ✅ Expose new backend port 3175
EXPOSE 3175

# ✅ Run your backend server on 3175
ENV PORT=3175
CMD ["node", "server.js"]
