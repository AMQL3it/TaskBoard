# Use Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY ./package.json ./yarn.lock /app/
RUN yarn install

# Copy the rest of the application code
COPY . /app/

# Expose the port for React (default 3000)
EXPOSE 3000

# Run the React app
CMD ["yarn", "start"]
