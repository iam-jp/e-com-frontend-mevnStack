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
         <b style="font-size:14px;">{{this.$route.params.storeName}}</b>
         </span>
    </div>
    </nav>
    </div>
    
   <cattitle></cattitle>
   
    <div>
    <onlineProducts :storeName = store.businessName></onlineProducts>
    </div>
    </div>
<div style="margin-top:65px">
 
  </div>
</div>
</template>

<script>
import axios from 'axios'
import storeDisplay from './../landingPage/storeDisplay'
import banners from './../landingPage/banners'
import onlineProducts from './../onlineProducts'
import cattitle from './../catTitle'
export default {
    data(){
        return{
            files:[],
            store:''
        }
    },
components:{
    banners,
    onlineProducts,
    storeDisplay,
    cattitle
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
           console.log(vm.files.length)
      })
    },
    loadStoreDetails(name){
        axios.get('http://localhost:5000/store_by_name/'+name)
        .then(res=>{
            this.store=(res.data)
        })
    }  
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