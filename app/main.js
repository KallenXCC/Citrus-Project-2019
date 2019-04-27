import Vue from 'nativescript-vue';
import HelloWorld from './components/HelloWorld';
import VueResource from 'vue-resource'

Vue.use(VueResource)

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <HelloWorld />
        </Frame>`,

    components: {
        HelloWorld
    }
}).$start();