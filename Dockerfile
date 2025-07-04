FROM node:20 AS build
WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    python3 \
    python3-pip \
    libvips-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html/blog

# Create nginx configuration with specific redirects for historical URLs
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80