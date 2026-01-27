# ELK Traffic Demo Project

This project demonstrates how the **ELK Stack (Elasticsearch, Logstash, Kibana)** can be used to observe, analyze, and visualize traffic patterns, latency, and failures in a real-world web application scenario.

The system is intentionally designed as a **multi-service demo** to simulate production-like behavior under different traffic and failure conditions.

---

## Project Goals

- Simulate realistic web traffic
- Generate meaningful application logs
- Demonstrate observability using the ELK stack
- Showcase latency, error rates, and traffic spikes
- Keep services lightweight, containerized, and reproducible

---

## High-Level Architecture

Traffic Generator ---> Demo Ecommerce Service ---> ELK Stack
|
└── Structured JSON Logs

- **Traffic Generator**: Generates different traffic patterns (normal, burst, failure)
- **Demo Ecommerce Service**: Acts as a realistic backend system
- **ELK Stack**: Collects and visualizes logs and metrics

---

##  Repository Structure

elk-traffic-demo/
├── traffic-generator/             # Traffic generator microservice
├── demo-website/                  # Demo website application
├── elk-stack/                     # ELK stack configuration files
├── scripts/                       # Helper shell scripts
└── docs/                          # Documentation files
