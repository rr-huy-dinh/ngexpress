FROM mhart/alpine-node:8

WORKDIR /app
COPY . .

RUN npm install -g @angular/cli

RUN cd frontend && npm install && ng build

RUN cd backend && npm install --production

EXPOSE 3000
CMD ["node", "./backend/bin/www"]
