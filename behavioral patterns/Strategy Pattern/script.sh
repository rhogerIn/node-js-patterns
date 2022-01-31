docker run \
    --name postgres \
    -e POSTGRES_USER=rogerio \
    -e POSTGRES_PASSWORD="12345678" \
    -e POSTGRES_DB=keyboard \
    -p 5432:5432 \
    -d \
    postgres

docker logs postgres
docker exec -it postgres psql --username rogerio --dbname keyboard

CREATE TABLE keyboards(id serial PRIMARY KEY, name VARCHAR(255) NOT NULL);
SELECT * FROM keyboards;


docker run \
    --name mongo \
    -e MONGO_INITDB_ROOT_USERNAME=rogerio \
    -e MONGO_INITDB_ROOT_PASSWORD=12345678 \
    -p 27017:27017 \
    -d \
    mongo:4