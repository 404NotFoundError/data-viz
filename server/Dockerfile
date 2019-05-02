FROM httpd:2.4
MAINTAINER adebayo98 <hountondjigodwill@gmail.com>
WORKDIR ./
COPY ./
RUN apt-get update -y 
RUN apt-get install curl -y 
RUN apt-get install php libapache2-mod-php -y
EXPOSE 80
CMD ["composer install", "php bin/console cache:clear"]
