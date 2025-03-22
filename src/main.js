import { getAllProducts, getProductById } from './requests/products';
import { markupAllProducts, markupProduct } from './services/markupService';

// getAllProducts().then(console.log);

const allProducts = document.getElementById('allProducts');
const singleProduct = document.getElementById('singleProduct');
const form = document.getElementById('singleProductForm');

getAllProducts().then(({ data: { products } }) => {
  console.log(products);
  //   const markupCards = markupAllProducts(products);
  //   allProducts.insertAdjacentHTML('beforeend', markupCards);
});

form.addEventListener('submit', findProductById);
function findProductById(event) {
  event.preventDefault();
  const id = event.target.elements.id.value;
  //   getProductById(id).then(console.log);
  getProductById(id).then(({ data }) => {
    const markupCard = markupProduct(data);
    // console.log(markupCard);
    singleProduct.innerHTML = markupCard;
    form.reset();
  });
}
