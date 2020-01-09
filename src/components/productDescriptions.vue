<template>
<div>

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
     
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:['product']
}
</script>

<style scoped>
card{text-align: center; border: none; border-radius: 3px;-webkit-box-shadow: 12px 14px 22px 2px rgba(0,0,0,0.75);
-moz-box-shadow: 12px 14px 22px 2px rgba(0,0,0,0.75);
box-shadow: 12px 14px 22px 2px rgba(0,0,0,0.75);
margin-bottom: 100px;
}

</style>