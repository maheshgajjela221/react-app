# Use lightweight Node image
FROM node:18-alpine

WORKDIR /app

# ✅ Copy only the built frontend
COPY dist/ ./dist

# ✅ Replace localhost:5173 with your backend IP inside the built files
RUN find dist/ -type f -exec sed -i 's/localhost:5173/3.106.196.201:5175/g' {} + || true

# ✅ Install serve globally to serve static files
RUN npm install -g serve

# ✅ Expose the port you want
EXPOSE 5175

# ✅ Serve the frontend
CMD ["serve", "-s", "dist", "-l", "5175"]
