import { routeChange } from "../router/router.js";

export default class ProductList {
    constructor($target, initialState) {
      this.$target = $target;
      this.$productList = document.createElement('ul');

      this.state = initialState;
      this.render();
      this.addEventListeners();
    }

    addEventListeners() {
      this.$productList.addEventListener('click', e => {
        const $li = e.target.closest('li');
        const { productId } = $li.dataset;
        e.preventDefault();

        if (productId) {
          routeChange(`/products/${productId}`);
        }
      });
    }
  
    setState(nextState) {
      this.state = nextState;
      this.render();
    }
  
    generateHtml() {
      
    }

    render() {
      if (!this.state) {
        return;
      }

      this.$productList.innerHTML = `
        ${this.state.map(product =>
          `
            <li class="Product" data-product-id="${product.id}">
              <a href="/products/${product.id}">
                <img src="${product.imageUrl}">
                <div class="Product__info">
                  <div>${product.name}</div>
                  <div>${product.price}</div>
                </div>
              </a>
            </li>
          `
        ).join('')}
      `
      this.$target.appendChild(this.$productList);
    }
  }
  
  