# Stage 1: Build Angular app using Node 20 (LTS)
FROM node:20 AS build
WORKDIR /app
# copy package files first for caching
COPY package*.json ./
# install dependencies
RUN npm ci --no-audit --no-fund
# copy source and build
COPY . .
# use '--' to pass flags to ng; project config handled by package.json
RUN npm run build 
# Stage 2: Serve with nginx
FROM nginx:alpine
# adjust the dist path if your app's output is different
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
