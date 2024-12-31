# Use a Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and install dependencies
COPY ./package.json ./yarn.lock /app/
RUN yarn install

# Copy the rest of the application code
COPY . /app/

# Install MySQL and Sequelize dependencies
RUN yarn add mysql2 sequelize

# Expose the port for the backend (default 5000)
EXPOSE 5000

# Run the server
CMD ["node", "index.js"]  # Adjust this if your entry point is different
