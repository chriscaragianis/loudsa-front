FROM kyma/docker-nginx
COPY build /var/www
COPY vhosts.conf /etc/nginx/conf.d/
CMD 'nginx'
