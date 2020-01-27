<template>
    <div>
    <div class="container-fluid"  >
          
        <button  style="background-color:#f1c40f;color:#353b48; font-weight:100; margin-top:15px" class="btn" >
            Similar Products
        </button>

        <button style="background-color:#f1c40f; float:right; font-weight:100; margin-top:15px;color:#353b48" class="btn"> 
            View All
        </button>
        
        
        <similarCategory   :dataBundle = dataBundle :storeName =  this.$route.params.storeName></similarCategory>

        <cattitle></cattitle>
         <onlineProducts :storeName = this.$route.params.storeName></onlineProducts>

       
    </div>
   
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import similarCategory from './similarCategory'
import cattitle from './catTitle'
import onlineProducts from './onlineProducts'
import axios from 'axios'
export default {
    data(){
        return{
            products:[],
           dataBundle:{},
           op:[],
           opdataBundle:{}
        }
    },
    computed:{
        ...mapGetters([
            'getProduct'
        ])
    },
    methods:{
        loadProducts(store){
            
      axios.get('http://localhost:5000/store_by_name/product_list/' + store)
      .then(res=>{
        const list = res.data
       list.forEach(element=>{
          this.products.push(element)
         
       })
        Object.assign(this.dataBundle,this.products)
       
      })
    },
    loadOnlineProducts(){
            
      axios.get('http://localhost:5000/get_online_products')
      .then(res=>{
        
        const list = res.data
       list.forEach(element=>{
          this.op.push(element)
         
       })
        Object.assign(this.opdataBundle,this.op)
      
       
      })
    }
    },
    components:{
        similarCategory,
        onlineProducts,
        cattitle
    },
    mounted(){
        this.loadProducts(this.$route.params.storeName)
        this.loadOnlineProducts()
    }

}

</script>

<style scoped>

</style>