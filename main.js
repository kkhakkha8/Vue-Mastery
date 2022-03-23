const app = Vue.createApp({
    methods: {
        showDesc() {
            alert('This is Description');
        }
    },
    data() {
        return{
            product : 'Socks',
            image: './assets/images/socks_green.jpg',
            url : 'https://www.youtube.com',
            inStock: true,
            invetory : 100,
            onSale : true,
            details : ['50% cotton','30% wool', '20% polyester'],
            variants : [
                {id : 2234, color : 'green'},
                {id : 2235, color : 'blue'}
            ],
            sizes : [33,34,35,40,42,44]
        }
    }
})
