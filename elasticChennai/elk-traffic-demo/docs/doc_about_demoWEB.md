# Demo Ecommerce Service (ELK Workshop)

This is a lightweight demo ecommerce backend built for demonstrating
logging, observability, and traffic analysis using the ELK stack.

## Features
- Express-based API
- Static product catalog
- In-memory cart simulation
- Structured JSON logging (ELK-ready)

## Endpoints
- GET /health
- GET /products
- GET /products/:id
- POST /cart/:cartId/add
- GET /cart/:cartId

## Run locally
```bash
npm install
npm start

