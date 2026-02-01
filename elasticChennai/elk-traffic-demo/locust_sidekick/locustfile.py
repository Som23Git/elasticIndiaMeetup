from locust import HttpUser, between, task


class DemoEcommerceUser(HttpUser):
    wait_time = between(1, 3)

    @task(3)
    def browse_products(self):
        self.client.get("/products")

    @task(1)
    def view_product(self):
        self.client.get("/products/1")

    @task(1)
    def health_check(self):
        self.client.get("/health")
