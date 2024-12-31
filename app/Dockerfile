# Use a Node.js base image with Expo
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY ./package.json ./yarn.lock /app/
RUN yarn install

# Copy the rest of the application code
COPY . /app/

# Expose the port for Expo (default 19000)
EXPOSE 19000

# Run Expo when the container starts
CMD ["yarn", "start"]
