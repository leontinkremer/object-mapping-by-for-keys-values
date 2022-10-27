const animals = {
  camel: "🐫",
  cow: "🐄",
};

for (let [key, value] of Object.entries(animals)) {
  console.log(`${key}: ${value}`);
}
