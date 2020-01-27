<template>
<div>
    <div>
    <banners :files=files></banners>
    <div class="header" >
    <nav class="navbar navbar-expand-md navbar-dark" 
    style="background-color:#192a56"
    >
    <div class="container-fluid" style="height:35px;">
     <span style="float:left; color:white; margin-top:0px; margin-left:25px;">
         <b style="font-size:14px;">{{this.store[0].businessName}}</b>
         
         </span>

    </div>
    </nav>
    </div>
   
   <cattitle></cattitle>
    <onlineProducts :storeName = this.$route.params.storeName></onlineProducts>
    <storeCategory :store = this.$route.params.storeName ></storeCategory>
    
    </div>

</div>
</template>

<script>
import axios from 'axios'
import storeDisplay from './../landingPage/storeDisplay'
import banners from './../landingPage/banners'
import onlineProducts from './../onlineProducts'
import cattitle from './../catTitle'
import storeCategory from './storeCategory'
export default {
    data(){
        return{
            files:[],
            store:{},
            
            temp:[],
            products:{},
            categories:[],
            category:[],
            tester:[]
        }
    },
components:{
    banners,
    onlineProducts,
    storeDisplay,
    cattitle,
    storeCategory
},
methods:{
    loadBanners(){
      var vm =this
    axios.get('http://localhost:5000/bannerupload')
      .then(res => {
        res.data
        .forEach(data=>{
            
            const typedArray = new Uint8Array(data.image.data)
            const stringChar = String.fromCharCode.apply(null,typedArray) 
            const base64string = btoa(stringChar)
            vm.files.push(base64string)
            })
            vm.count = vm.files.length
        //    console.log(vm.files.length)
      })
    },
    loadStoreDetails(name){
        axios.get('http://localhost:5000/store_by_name/'+name)
        .then(res=>{
            Object.assign(this.store,res.data)
            this.$store.dispatch('getStore',this.store[0].businessName)
        })
    }, 
    
    
},
mounted(){
    var vm = this
    this.loadBanners()
    this.loadStoreDetails(vm.$route.params.storeName)
    
}
}
</script>

<style scoped>

</style>