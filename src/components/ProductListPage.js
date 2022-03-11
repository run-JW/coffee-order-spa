import ProductList from './ProductList.js';
import api from '../utils/api.js';

export default class ProductListPage {
  constructor($target) {
    $target.innerHTML = '';
    this.$target = $target;
    
    const $page = document.createElement('div');
    $page.className = 'ProductListPage';
    $page.innerHTML = '<h1>상품 목록</h1>';
    this.$page = $page;

    this.fetchProducts();
  }

  async fetchProducts() {
    const products = await api.fetchProducts();
    this.setState(products);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.$target.appendChild(this.$page);
    new ProductList(this.$page, this.state);
  }
}