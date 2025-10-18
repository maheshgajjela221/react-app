# Frontend (React + Vite)
FROM node:18

WORKDIR /app

# Copy dependency files first for caching
COPY package*.json ./
RUN npm install

# Copy your app source
COPY . .

# ✅ Replace localhost:3000 with your backend IP:3175 (if needed)
RUN find . -type f -exec sed -i 's/localhost:5173/52.64.85.12:5175/g' {} + || true+

# ✅ Build the app
RUN npm run build

# ✅ Serve built files using serve
RUN npm install -g serve

# ✅ Expose new port 5175
EXPOSE 5175

# ✅ Serve on port 5175
CMD ["serve", "-s", "dist", "-l", "5175"]
