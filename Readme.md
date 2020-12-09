docker build -t shop .

docker run --env-file .env -p 8080:8080 shop
