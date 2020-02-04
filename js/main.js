//create a couple of components we cana request and render
import SplashComponent from "./modules/SplashComponent.js";
import AppComponent from "./modules/AppComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js"
// let SplashComponent = {
//     template: `<h1>Welcome to my Super Awesome Soyoon's App!</h1>`
// };

// let AppComponent = {
//     template: `<h1>This is the App Page</h1>`

// };

// let ErrorComponent = {
//     template: `<h1 class="error">This page doesn't exist!</h1>`
// };

//these are the same as Express routes -> router.get('/', ... do smth with the request)
const routes = [
    { path: '/', name:'splash', component: SplashComponent },
    { path: '/app', name:'app', component: AppComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

const router = new VueRouter({
    routes // short for `routes: routes`
  })


const vm = new Vue({
    data: {

    },

    method: {

    },

    router


}).$mount("#app");