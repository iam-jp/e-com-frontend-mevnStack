<template>
    <div class="container=fluid justify-content-center" style="margin-top:10px; margin-left:35px; margin-bottom:35px;">
  <div class="row">
  
    <div class="col-12 col-md-4 col-lg-2 col-sm-4 float-left" v-for="(product,i ) in temp " v-bind:key="i">
      <img class="img-fluid">
        <div class="product-grid2">
          <div class="product-image2">
            <router-link :to="{name:'productDetails',params:{storeName:storeName,id:product._id}}"  active-class="active" >
            <img class="pic-2" :src=product.baseImage>
            </router-link>
            <ul class="social">
              <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-heart" aria-hidden="true" style="color:none;"></i></a></li>
            </ul>
          </div>
               
          <div class="product-content">
            <p class="card-title" style="color:#1e272e; text-align:center;"><span class="badge badge-pill badge-success">4.5 <i class="fa fa-star-o"></i></span></p>
              <h3 class="title"><a href="#">{{product.title}}</a></h3>
                <sup style="text-decoration:line-through; color: red; font-size:10px; font-weight:number">$120</sup>
                  <span style="font-weight:bolder">{{product.price}} </span>
                 
                  <cart :storeName = getStore :product = product :storeProduct=true></cart>
          </div>  
          
        </div>
    </div>
</div>

</div>
            
           
            
            
        
</template>

<script>
import {mapGetters} from'vuex'
import cart from './../landingPage/cartChild'
export default {
    
    data(){
        return{
            temp:[],

            
        }
    },
    computed:{
        ...mapGetters([
            'getToken',
            'getStore',
            
        ])
    },
    
    methods:{
        loadProductImages(){
           Object.keys(this.dataBundle).forEach(ele=>{
            this.temp.push((this.filterProducts(this.dataBundle[ele],this.cat)))
            
           })
           this.temp = this.temp.filter((ele)=>{
              return ele != undefined
           })
          
        },
        filterProducts(product,category){
            if(product.subCategory2==category){
                
                return (product)
                
            }else{
                return 
            }
        }
    },
    props: {
        dataBundle:{
            type:Object
        },
        cat:{
            type:String
        },
        storeName:{
            type:String
        }
    },
    created(){
        this.loadProductImages()
       
        
    },
    components:{
        cart
    }
}
</script>

<style  scoped>
.product-image2{border-style:none; border-width:0px; border-color:whitesmoke; flex-shrink:0; height:190px;  width:170px; padding:20px}
.pic-2{width:100%; height:100%;}
.product-grid2{width:150px;}  
.social{margin-left:70px; position:relative; bottom:-20px;}
.social li{margin:0 0 0px;display:inline;}
.social li a{color:ghostwhite;background-color:green;font-size:10px;line-height:25px;text-align:center;height:25px;width:25px;border-radius:50%;display:block;}
.social li a:after,.product-grid2 .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;line-height:22px;border-radius:3px;padding:0 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.social li a:hover:after,.product-grid2 .social li a:hover:before{opacity:1}
.product-content{height:auto; width:170px; text-align:center; border-style:none; border-width:0px; border-color:whitesmoke}
.title{font-size:12px;margin:5px 0 7px;white-space:nowrap;font-weight:bold}
.title a{color:#303030} 
</style>