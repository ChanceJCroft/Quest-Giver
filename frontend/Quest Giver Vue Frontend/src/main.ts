import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { tempEnv } from './tempenv';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faInfo, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faInfo, faCircleInfo)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)


  app.use(
    createAuth0({
      domain: tempEnv.AUTH0_DOMAIN,
      clientId: tempEnv.AUTH0_CLIENTID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );

app.mount('#app')
