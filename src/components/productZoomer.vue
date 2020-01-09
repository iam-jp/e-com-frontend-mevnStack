<template>
<div>
   
<div class="col-md-5" style="margin-left:30px;">
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src=URL class="d-block w-100" alt="henco">
    </div>
    <!-- <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/image/416/416/k3orqfk0/laundry-detergent/j/z/5/stain-champion-detergent-powder-henko-original-imafmrbkxyugaysr.jpeg?q=70" class="d-block w-100" alt="henco">
    </div>
    <div class="carousel-item">
      <img src="https://rukminim1.flixcart.com/image/416/416/k3orqfk0/laundry-detergent/j/z/5/stain-champion-detergent-powder-henko-original-imafmrbkxyugaysr.jpeg?q=70" class="d-block w-100" alt="henco">
    </div> -->
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

window.addEventListener('touchstart',event=>{
  console.log(event)
},{passive:true})

import axios from 'axios'


export default {
    
    data(){
        return{
            'images': {
          'thumbs': [
            {
              'id': '',
              'url': ''
            }
          ],
          'normal_size': [
            {
              'id': '',
              'url': ''
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': ''
            }
          ]
      },
      'zoomerOptions': {
        zoomFactor: 4,
                      pane: "pane",
                      hoverDelay: 300,
                      namespace: "zoomer-left",
                      move_by_click: false,
                      scroll_items: 4,
                      choosed_thumb_border_color: "#dd2c00",
                      scroller_position: "bottom",
                      zoomer_pane_position: "right"
      },
            product:''

        }
    },
    props:['productId','URL','product'],
    methods:{
        loadProducts(id){
            axios.get('http://localhost:5000/products_by_id/' + id)
            .then((res)=>{
                this.product = res.data
            })
        }
    },
    mounted(){
        var vm =this
        this.loadProducts(vm.productId)
    },
   
}
</script>

<style scoped>
.card{text-align: center; border: none; border-radius: 3px;-webkit-box-shadow: 12px 14px 22px 2px rgba(0,0,0,0.75);
-moz-box-shadow: 12px 14px 22px 2px rgba(0,0,0,0.75);
box-shadow: 12px 14px 22px 2px rgba(0,0,0,0.75);
margin-bottom: 100px;
}


</style>