# Base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy remaining backend code
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]
