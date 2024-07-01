
FROM node:20.11.1 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@latest && npm install
COPY . .
RUN ng build --configuration production
WORKDIR /usr/share/nginx/html
FROM nginx:alpine
COPY --from=build /app/dist/app/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
