# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy application code
COPY . .

# Expose app port
EXPOSE 3000

# Run the app
CMD ["node", "app.js"]
