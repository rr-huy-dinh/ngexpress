FROM huydinhq/alpine-node-angular

WORKDIR /app
COPY . .

RUN cd frontend && npm install && ng build

RUN cd backend && npm install --production

EXPOSE 3000
CMD ["node", "./backend/bin/www"]
