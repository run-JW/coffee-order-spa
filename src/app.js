import ProductListPage from './components/ProductListPage.js';
import ProductDetailPage from './components/ProductDetailPage.js';
import CartPage from './components/CartPage.js';
import { init } from './router/router.js';

export default class App {
  constructor($target) {
    this.$target = $target;

    this.routing = this.routing.bind(this);
    init(this.routing);

    this.routing();
    this.addEventListeners();
  }
  
  addEventListeners() {
    window.addEventListener('popstate', this.routing);
  }

  render() {
    this.routing();
  }

  routing() {
    const { pathname } = location;

    if (pathname === '/web/') {
      new ProductListPage(this.$target);
    } else if (pathname.indexOf('/products/') === 0) {
      const [, , productId] = pathname.split('/');
      new ProductDetailPage(this.$target, productId);
    } else if (pathname === '/cart') {
      new CartPage(this.$target);
    }
  }
}