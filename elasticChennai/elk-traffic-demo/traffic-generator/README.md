# Traffic Generator Service

This service is a standalone **traffic generator microservice** used to simulate
realistic traffic patterns against the demo ecommerce backend.

## Purpose
- Generate controllable HTTP traffic
- Simulate real-world usage patterns (normal, burst, failure scenarios)
- Act as a traffic source for ELK stack observability demos

## Scope
- No ELK stack integration
- No business logic
- No data persistence
- Fully containerized

## High-Level Flow

Traffic Generator → Demo Ecommerce Service → ELK Stack

## Status
 Under active development

Initial focus:
- Service skeleton
- Configurable traffic generation
- Containerization
