// Step 2
const products = [
  { name: "Refrigerator", category: "Electronics", price: 1499.99, inventory: 30 },
  { name: "Sweat Pants", category: "Apparel", price: 6.99, inventory: 40 },
  { name: "Milk",  category: "Groceries", price: 2.99,  inventory: 60 },
  { name: "Toilet Paper",  category: "Household", price: 9.99, inventory: 90 },
  { name: "Loaf of Bread", category: "Groceries", price: 3.99, inventory: 47 },
];

// Step 3
for (let p of products) {
  let discount = 0;
  switch (p.category) {
    case "Electronics": discount = 0.20; break;
    case "Apparel":     discount = 0.15; break;
    case "Groceries":
    case "Household":   discount = 0.10; break;
    default: discount = 0; break;
  }
  p.promoPrice = Number((p.price * (1 - discount)).toFixed(2));
}

// Step 4
const customerType = ["regular", "student", "senior"];

function getExtraDiscount(type) {
  let extraDiscount;
  if (type === "student") {
    extraDiscount = 0.05;
  } else if (type === "senior") {
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;
  }
  return extraDiscount;
}

// Step 5
for (let i = 1; i <= 3; i++) {
  let subtotal = 0;

  for (const item of products) {
    if (item.inventory > 0) {
      subtotal += item.promoPrice;
      item.inventory--;
    }
  }

  const currentType = customerType[i - 1] || "regular";
  const extraDiscount = getExtraDiscount(currentType);
  const finalTotal = Number((subtotal * (1 - extraDiscount)).toFixed(2));

  console.log(
    `Customer ${i} (${currentType}) subtotal: $${subtotal.toFixed(2)} - extra ${(extraDiscount*100).toFixed(0)}% => final $${finalTotal.toFixed(2)}`
  );
}

// Step 6
console.log("\nStep 6: Keys/values for first product (after discounts applied):");
const firstProduct = products[0];
for (const key in firstProduct) {
  console.log(`${key}: ${firstProduct[key]}`);
}

// Step 7
console.log("\nStep 7: All products after inventory update:");
for (const product of products) {
  console.log(`\nProduct: ${product.name}`);
  for (const [prop, val] of Object.entries(product)) {
    console.log(`  ${prop}: ${val}`);
  }
}