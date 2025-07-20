export const tables = [
  {
    name: "customers",
    description: "Customer master data including contact and segmentation info.",
    scriptUrl: "https://github.enterprise.com/org/repo/blob/main/tables/customers/logic.py",
    columns: [
      { name: "customer_id", type: "STRING", description: "Unique customer identifier." },
      { name: "name", type: "STRING", description: "Full name of the customer." },
      { name: "email", type: "STRING", description: "Email address." },
      { name: "segment", type: "STRING", description: "Customer segment classification." },
      { name: "region_id", type: "STRING", description: "Region identifier for the customer." }
    ]
  },
  {
    name: "orders",
    description: "Order transactions with line item details.",
    scriptUrl: "https://github.enterprise.com/org/repo/blob/main/tables/orders/logic.py",
    columns: [
      { name: "order_id", type: "STRING", description: "Order unique identifier." },
      { name: "customer_id", type: "STRING", description: "ID of the customer who placed the order." },
      { name: "order_date", type: "DATE", description: "Date when the order was placed." },
      { name: "total_amount", type: "DECIMAL", description: "Total order value." },
      { name: "region_id", type: "STRING", description: "Region identifier for the order." }
    ]
  },
  {
    name: "regions",
    description: "Geographical regions for customers and orders.",
    scriptUrl: "https://github.enterprise.com/org/repo/blob/main/tables/regions/logic.py",
    columns: [
      { name: "region_id", type: "STRING", description: "Unique region identifier." },
      { name: "region_name", type: "STRING", description: "Name of the region." },
      { name: "country", type: "STRING", description: "Country of the region." }
    ]
  }
]; 