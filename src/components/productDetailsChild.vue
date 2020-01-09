<template>
    <div>
         <div class="container-fluid mt-6" style="margin-top:20px;">
            <div class="row">
               
                
             <div class="col-md-5" style="margin-left:30px;">
<div  class="carousel slide" data-ride="carousel" >
  <div class="carousel-inner" style=" border:solid 1px lightgrey;">
    <div class="carousel-item active" >
      <img :src=URL style="height:600px; width:580px; padding:50px; " alt="henco" >
    </div>
   
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
               
 <div class="col-md-6" style="margin-left:10px;">
      <div class="row mt-1">
        <h3 style="font-size:18px;">{{productDetails.product.title}}</h3>

      </div>
      <div class="row mt-1">
        <h3 style="font-size:22px;"><i class="fa fa-inr" aria-hidden="true"></i>{{productDetails.product.salePrice}}</h3>
        &nbsp; &nbsp;
        <h4 style="font-size:14px;"><del>{{productDetails.product.price}}</del></h4>
        &nbsp; &nbsp;
        
      </div>
      <div class="row mt-1">
      <h5 style="color:green; font-size:14px;">In Stock.</h5>      
      </div>    
      <div class="row mt-1" style="border-bottom:solid 1px lightgrey;">
         <p class="card-title" style="color:#1e272e; text-align:center;"><span class="badge badge-pill badge-success">4.5 <i class="fa fa-star-o"></i></span></p>
        &nbsp; &nbsp;
        <h6 style="font-size:14px; margin-top:5px;">1200 star rating  and 250 reviews</h6>
      </div>

       <div class="row mt-4">
        <div class="col">  
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> {{productDetails.product.shortDescription}}</p>
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> 20% Instant Discount on SBI Credit Cards</p>
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> 20% Instant Discount on SBI Credit Cards</p>
      </div>
      </div>
       
      <div class="row mt-2" style="margin-left:0px;">
        <h5 class="text-info"><i class="fa fa-map-marker" aria-hidden="true"></i></h5>
        <p style="font-size:14px"> &nbsp; Delivery by 23 Jul, Tuesday | &nbsp; <span class="text-success">FREE</span> </p>
      </div>
 
         
               
                <div class="row mt-4" style="margin-left:0px;">
        <div class="dropdown show"> <a class="btn btn-success" style="width:120px;" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Add to Cart </a>
        </div>
        <div class="dropdown show" style="padding-left:20px;"> <a class="btn btn" style="width:140px; background-color:orangered; color:white;" href="#" role="button" aria-haspopup="true" aria-expanded="false"> Add to Wishlist </a>
        </div>    
      </div>


            </div>
         </div>
    </div>
    </div>
</template>

<script>
// import productZoomer from './productZoomer'
// import productContent from './productDetailsContent'
// import productDescription from './productDescriptions'
export default {
    data(){
        return{
            shortDesc : []
        }
    },
    props:['productId','URL','productDetails'],
    methods:{
        descriptionHandling(){
             var vm = this
            this.shortDesc.push(vm.productDetails.product.shortDescription.split('|'))
            console.log(this.shortDesc)
        }
    },
    created(){
       
        
    }
    
}
</script>

<style scoped>

</style>