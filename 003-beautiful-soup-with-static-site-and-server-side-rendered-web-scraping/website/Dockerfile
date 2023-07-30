# Use the official Ruby image from the Docker Hub
FROM ruby:3.0.0

# Install the necessary libraries
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# Install Jekyll and Bundler
RUN gem install jekyll
RUN gem install bundler:1.17.3


# Create a new directory for your Jekyll site
RUN mkdir /usr/src/app

# Change to the new directory
WORKDIR /usr/src/app

# Copy Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install the Gems
RUN bundle install

# Copy the rest of your Jekyll site to the image
COPY . .

# Make port 4000 available to the world outside this container
EXPOSE 3000

# Execute Jekyll serve command
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "3000"]
