<template>
     <div>
        <div class="col-md-6" style="margin-left:10px;">
      <div class="row mt-1">
        <h3 style="font-size:18px;">{{product.product.productTitle}}</h3>
       
      </div>
      <div class="row mt-1">
        <h3 style="font-size:22px;"><i class="fa fa-inr" aria-hidden="true"></i>{{product.product.salePrice}}</h3>
        &nbsp; &nbsp;
        <h4 style="font-size:14px;"><del>{{product.product.price}}</del></h4>
        &nbsp; &nbsp;
        <h4 class="text-success" style="font-size:20px;">30% off</h4>
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
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i>{{product.product.shortDescription}}</p>
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> 20% Instant Discount on SBI Credit Cards</p>
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> 20% Instant Discount on SBI Credit Cards</p>
      </div>
      </div>
       
      <div class="row mt-2" style="margin-left:0px;">
        <h5 class="text-info"><i class="fa fa-map-marker" aria-hidden="true"></i></h5>
        <p style="font-size:14px"> &nbsp; Delivery by 23 Jul, Tuesday | &nbsp; <span class="text-success">FREE</span> </p>
      </div>
        </div>
   
    </div>
   
       
</template>

<script>
export default {
    name:'productDetailsContent',
    data(){
        return{

        }
    },
    props:['product']
}
</script>

<style scoped>


</style>