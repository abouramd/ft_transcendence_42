all: build

build:
	docker compose up --build -d

stop:
	docker compose stop

clean:
	docker compose down

fclean:
	docker compose down -v --rmi all
