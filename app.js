// console.log('hello, vue')

const app = Vue.createApp({
    // data, functions
    // template: '<h2> I am the template </h2>'

    data() {
        return {
            showBooks: true,
            title: 'hi',
            author: 'there',
            age: 18
        }
    },
    methods: {
        // changeTitle(abc) {
           // this.title = 'words of randiance'
         //  this.title = abc
       // }
       toggleShowBooks() {
        this.showBooks = !this.showBooks
       }
    }
})

app.mount('#app')