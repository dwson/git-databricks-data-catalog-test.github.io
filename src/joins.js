export const joins = {
  "customers.customer_id": [
    {
      table: "orders",
      column: "customer_id",
      logic: "customers.customer_id = orders.customer_id"
    }
  ],
  "orders.customer_id": [
    {
      table: "customers",
      column: "customer_id",
      logic: "orders.customer_id = customers.customer_id"
    }
  ]
}; 