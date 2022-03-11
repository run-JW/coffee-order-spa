export default class CartPage {
  constructor($target) {
      $target.innerHTML = '';
      const $page = document.createElement('div');
      $page.className = 'CartPage';
      $page.innerHTML = '<h1>장바구니</h1>'
      this.$page = $page;
      this.$target = $target;

      this.render();
  }

  render() {
      this.$target.appendChild(this.$page);
  }
}
