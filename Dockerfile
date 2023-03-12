FROM nginx:1.15-alpine
COPY html /etc/nginx/html
COPY conf /usr/local/nginx
WORKDIR /etc/nginx/html