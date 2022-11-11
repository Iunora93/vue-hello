`use strict`
const {createApp} = Vue;
createApp({
    data() {
        return {
            textImage: {
                message: 'Hello Vue!',
                image: 'https://www.positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png',
                cssClassList: "size",
                center: "center"
            }
        }
    }
}).mount('#app')