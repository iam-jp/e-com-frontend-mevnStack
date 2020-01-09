<template>
<div>
    <div class="header" >
    <nav class="navbar navbar-expand-md navbar-dark" 
    style="background-color:#192a56"
    >
    <div class="container-fluid" style="height:35px;">
     <span style="float:left; color:white; margin-top:0px; margin-left:25px;">
         <b style="font-size:14px;">{{this.$route.params.storeName}} </b>
         </span>
    </div>
    </nav>
    </div>

    <!-- <productZoomer :productId = this.$route.params.id :URL = product.baseImage > </productZoomer>
    <productContent :productDetails = {product}></productContent>
    <productDescription :product = {product}></productDescription> -->

    <productChild
        :productId = this.$route.params.id
        :URL = product.baseImage
        :productDetails = {product}
    ></productChild>
    

</div>
</template>

<script>
import axios from 'axios'
import productZoomer from './productZoomer'
import productContent from './productDetailsContent'
import productDescription from './productDescriptions'
import productChild from './productDetailsChild'

export default {
    data(){
       return{
           storeId : '',
           productId:'',
           product:''
       } 
    },
    methods:{
        loadProducts(id){
            axios.get('http://localhost:5000/products_by_id/' + id)
            .then((res)=>{
                this.product = res.data
            })
        }
    },
    mounted(){
       this.loadProducts(this.$route.params.id )
    },
    components:{
       
        productChild
    }
}
</script>

<style scoped>
.header{
    margin-top:5%
}

</style>