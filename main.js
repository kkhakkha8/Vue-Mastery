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
            invetory : 100
        }
    }
})
