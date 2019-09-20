FROM ubuntu:18.04
COPY . hrms
CD hrms
RUN ng serve
