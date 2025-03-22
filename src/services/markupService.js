export function markupAllProducts(products) {
  return products
    .map(({ brand, title, description, images, price }) => {
      return `<li>
      <img src="${images[0]}" alt="${title}" />
      <h3>brand: ${brand}</h3>
      <p>model: ${title}</p>
      <p>description: ${description}</p>
      <p>price: ${price}</p>
    </li>`;
    })
    .join('');
}
export function markupProduct({
  brand,
  title,
  description,
  images,
  price,
  id,
}) {
  return `<div data-id="${id}">
      <img src="${images[0]}" alt="${title}" />
      <h3>brand: ${brand}</h3>
      <p>model: ${title}</p>
      <p>description: ${description}</p>
      <p>price: ${price}</p>
    </div>`;
}
