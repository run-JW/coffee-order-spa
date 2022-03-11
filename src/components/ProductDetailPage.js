import ProductDetail from './ProductDetail.js';
import api from "../utils/api.js";

export default class ProductDetailPage {
    constructor($target, productId) {
        $target.innerHTML = '';
        const $page = document.createElement('div');
        $page.className = 'ProductDetailPage';
        $page.innerHTML = '<h1>상품 정보</h1>';
        this.$page = $page;
        this.$target = $target;

        this.state = {
            productId,
            product: null
        }

        this.render();
        this.fetchProduct();
    }

    async fetchProduct() {
        const { productId } = this.state;
        const product = await api.fetchProductFromId(productId);

        this.setState({
            ...this.state,
            product
        });
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        if (!this.state.product) {
            this.$target.innerHTML = '로딩중...'
        } else {
            this.$target.innerHTML = '';
            this.$target.appendChild(this.$page);
            new ProductDetail({
                $target: this.$page,
                initialState: {
                    product: this.state.product,
                    selectedOptions: []
                }
            });
        }
    }
}