# Docker Commands for NGINX Project

- `docker-compose down`  
  Stop and remove all containers and networks.

- `docker-compose build --no-cache`  
  Rebuild all images from scratch (ignore cache).

- `docker-compose up -d`  
  Start all containers in detached (background) mode.

- `docker-compose ps`  
  Show running containers and their status.

- `docker-compose logs -f`  
  View live logs from all containers.

- `docker exec -it <container_name> /bin/bash`  
  Open terminal inside a running container.

- `docker image prune -f`  
  Remove unused (dangling) images.

- `docker-compose restart`  
  Restart all services.

- `docker-compose stop`  
  Stop all running containers without removing them.

---

docker ps --> to check the container

docker exec -it nginx-practice-nginx bash
ls /usr/share/nginx/html

cat /etc/nginx/nginx.conf
