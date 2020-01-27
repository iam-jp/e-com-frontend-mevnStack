<template>
<div>
    <div class="container-fluid" v-for="(cat) in category" v-bind:key="cat">
           
        <button  style="background-color:#f1c40f;color:#353b48; font-weight:100; margin-top:15px" class="btn">
            {{cat}}
        </button>

        <button style="background-color:#f1c40f; float:right; font-weight:100; margin-top:15px;color:#353b48" class="btn"> 
            View All
        </button>

        <proCat  :cat = cat :dataBundle = dataBundle :storeName = store></proCat>
       
    </div>
   
</div>

</template>

<script>
import axios from 'axios'
import proCat from './productCategory'
export default {
    data(){
        return{
            products:[],
            categories:[],
            category:'',
            storeInfo:'',
            dataBundle:{
                
            }
           
    }
    },
    methods:{
        loadProducts(store){
            // const id = store._id
      axios.get('http://localhost:5000/store_by_name/product_list/' + store)
      .then(res=>{
        const list = res.data
       list.forEach(element=>{
          this.products.push(element)
         
       })
        Object.assign(this.dataBundle,this.products)
       this.loadCategories(store)
      })
    },
    loadCategories(store){
        this.storeInfo = store
        this.products.forEach(element=>{
            this.categories.push(element.subCategory2)
        })
        
        // this.category = new Set(this.categories)
        this.category = Array.from(new Set(this.categories))
        
    }
    },
    props:['store'],  
    mounted(){
        var vm = this
        this.loadProducts(vm.store)
    },
    components:{
        proCat
    }
}
</script>

<style scoped>

</style>

