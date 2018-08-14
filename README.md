# ngexpress
Boilerplate for express angular app

## Quick start

* Start mongodb

* Open Terminal 1

```
cd backend && npm install && npm start
```

* Open Terminal 2

```
cd frontend && npm install && npm start
```

* Check the app at http://localhost:4200

## Use MongoDB URI

```
cd backend/
MONGODB_URI=<MONGODB_URI> npm start
```

## Deploy with Docker

```
docker build -t ngexpress .
docker run -p 3000:3000 ngexpress
```

The docker image `ngexpress` is ready for deployment. You can check the app at http://localhost:3000
