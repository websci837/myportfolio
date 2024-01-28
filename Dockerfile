# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /raghavaportfolio

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the container
COPY . .

# Expose the port that the React app will run on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
