<template>
<v-app id="app">
  <headerc></headerc>
  <router-view></router-view>
</v-app>
</template>

<script>
import headerc from './components/landingPage/header.vue'
import store from './components/landingPage/storeDisplayParent.vue'
import banners from './components/landingPage/banners.vue'
import axios from 'axios'
export default {
  data(){
    return{
      signIn:false
    }
  },
  components: {
    headerc,
    store,
    banners
  },
  methods:{
    getapiCart(){
            const axiosInstance = axios.create({
                    baseURL:'http://localhost:5000/'
                })
                axiosInstance({method:'get',
                url:'user/me',
                headers:{Authorization: `Bearer ${this.$store.state.user.token}`}})
                .then((res)=>{
                  
                  this.$store.dispatch('getCart',res.data.cart)

                })
        }
  },
  created(){
    if(!this.signIn){
      this.$store.dispatch('tryAutoLogin')
      this.getapiCart()
      this.signIn=true
    }

    
    

  }
  
}
</script>

<style>
#app{
  overflow-x: hidden;
  font-family:  'Roboto Condensed', 'Open Sans', 'Helvetica Neue', sans-serif ,'Segoe UI'
}
</style>
