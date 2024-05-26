// A list of provinces
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// A list of products with prices
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// Exercise 1: ForEach Basics
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));

names.forEach((name, index) => {
  const province = provinces[index];
  console.log(`${name} (${province})`);
});

// Exercise 2: Uppercase Transformation
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Exercise 3: Name Lengths
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 4: Sorting
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

// Exercise 5: Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Number of remaining provinces: ${nonCapeProvinces.length}`);

// Exercise 6: Finding 'S'
const containsS = names.map(name => name.includes('S'));
const hasNameWithS = containsS.some(Boolean);
console.log(hasNameWithS);

// Exercise 7: Creating Object Mapping
const nameProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameProvinceMap);

// Advanced Exercises (Single console.log Execution)

// 1. Log Products
console.log(products.map(({ product }) => product).join('\n'));

// 2. Filter by Name Length
console.log(products.filter(({ product }) => product.length <= 5).map(({ product }) => product));

// 3. Price Manipulation
console.log(
  products
    .filter(({ price }) => price)
    .map(({ product, price }) => ({ product, price: Number(price) }))
    .reduce((total, { price }) => total + price, 0)
);

// 4. Concatenate Product Names
console.log(products.reduce((str, { product }) => str + product, ''));

// 5. Find Extremes in Prices
console.log(
  `Highest: ${Math.max(...products.map(({ price }) => Number(price)).filter(Number.isFinite))}.
   Lowest: ${Math.min(...products.map(({ price }) => Number(price)).filter(Number.isFinite))}.`
);

// 6. Object Transformation
console.log(
  Object.fromEntries(
    products.map(({ product, price }) => [product, { name: product, cost: Number(price) }])
  )
);