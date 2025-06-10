# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Create a simple server script for SPA routing
RUN echo 'const express = require("express"); \
const path = require("path"); \
const app = express(); \
const port = process.env.PORT || 8080; \
\
app.use(express.static(path.join(__dirname, "dist"))); \
\
app.get("*", (req, res) => { \
  res.sendFile(path.join(__dirname, "dist", "index.html")); \
}); \
\
app.listen(port, () => { \
  console.log(`Server running on port ${port}`); \
});' > server.js

# Install express for the server
RUN npm install express

# Serve the application
CMD ["node", "server.js"]