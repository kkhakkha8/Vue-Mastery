//        Creating Vue

const app = Vue.createApp({
    methods:{
        showDesc() {
            alert('This is Description')
        }
    },
    data() {
        return {
            product: 'Shoes'
        }
    }

});