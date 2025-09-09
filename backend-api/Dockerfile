# Dockerfile para backend-api
FROM php:8.2-cli
WORKDIR /var/www/html
COPY src/ .
EXPOSE 9000
CMD ["php", "-S", "0.0.0.0:9000", "index.php"]
