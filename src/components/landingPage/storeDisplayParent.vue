<template>
<div>
    <banners :files = files ></banners>
    <div class="header" v-for="(store , i ) in stores" v-bind:key="i">
    <nav class="navbar navbar-expand-md navbar-dark" 
    style="background-color:#192a56"
    >
    <div class="container-fluid" style="height:35px;">
     <span style="float:left; color:white; margin-top:0px; margin-left:25px;">
         <b style="font-size:14px;">{{store.businessName}}</b>
         
         </span>
       
        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul class="navbar-nav">
               
                <router-link :to="{name:'storePage',params:{storeName:store.businessName}}"  tag="li" active-class="active" exact>
                    <button class="btn btn-sm ml-3" style="background-color:forestgreen; float: right; height:35px; width:90px; color:white; font-size:12px; font-weight:initial; margin-right:25px">View Store</button>
                </router-link>
       
            </ul>
        </div>  
    </div>
</nav>

   <storeDisplay :storeId = store._id :storeName = store.businessName ></storeDisplay>
    </div>

</div>
</template>

<script>
import storeDisplay from './storeDisplay'
import banners from './banners.vue'
import axios from 'axios'
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            stores:'',
            files:[]
            
        }
    },
    methods:{
        loadStores(){
      axios.get('http://localhost:5000/stores')
      .then(res => {
        const data = res.data
        this.stores=data  
        })
    },
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
    }  
    },
    computed:{
        ...mapGetters([
            'getToken',
            'getCart'
        ])
    },
    created (){
       
        this.loadStores()
        this.loadBanners()
       
    },
    components:{
        storeDisplay,
        banners
    }
}
</script>

<style  scoped>

.nav-item-hover:hover
{background-color:orangered} 
 
</style>