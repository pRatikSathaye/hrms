FROM node
WORKDIR /hrms
COPY package.json /hrms
RUN npm install
COPY . /hrms
RUN npm install -g @angular/cli
CMD ng serve
EXPOSE 4200
