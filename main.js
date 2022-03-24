const app = Vue.createApp({
    methods: {
        showDesc() {
            alert('This is Description');
        }
    },
    data() {
        return{
            product : 'Socks',
            brand : 'Vue Mastery',
            url : 'https://www.youtube.com',
            selectedVariant : 0,
            onSale : true,
            details : ['50% cotton','30% wool', '20% polyester'],
            variants : [
                {id : 2234, color : 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id : 2235, color : 'blue', image : './assets/images/socks_blue.jpg', quantity: 0}
            ],
            sizes : [33,34,35,40,42,44],
            cart : 0,

        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateVariant(index) {
            this.selectedVariant = index;
            
        },
        removeFromCart() {
            this.cart -= 1;
        }
    },
    computed : {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        onSaleProduct() {
            return this.brand + ' ' + this.product + ' is on sale';
        }
    }
})
