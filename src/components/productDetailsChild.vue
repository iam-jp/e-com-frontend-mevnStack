<template>
    <div>
         <div class="container-fluid mt-6" style="margin-top:20px;">
            <div class="row">
               
                
             <div class="col-md-5" style="margin-left:30px;">
<div  class="carousel slide" data-ride="carousel" >
  <div class="carousel-inner" style=" border:solid 1px lightgrey;">
    <div class="carousel-item active" >
      <img :src=getProduct.baseImage style="height:600px; width:580px; padding:50px; " :alt=getProduct.title >
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
        <h3 style="font-size:18px;">{{getProduct.title}}</h3>

      </div>
      <div class="row mt-1">
        <h3 style="font-size:22px;"><i class="fa fa-inr" aria-hidden="true"></i>{{getProduct.salePrice}}</h3>
        &nbsp; &nbsp;
        <h4 style="font-size:14px;"><del>{{getProduct.price}}</del></h4>
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
        <p style="font-size:14px;" v-for="(desc,i) in shortDesc" :key="i"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> {{desc}}</p>
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> 20% Instant Discount on SBI Credit Cards</p>
        <p style="font-size:14px;"><i class="text-success fa fa-check-square-o" aria-hidden="true"></i> 20% Instant Discount on SBI Credit Cards</p>
      </div>
      </div>
       
      <div class="row mt-2" style="margin-left:0px;">
        <h5 class="text-info"><i class="fa fa-map-marker" aria-hidden="true"></i></h5>
        <p style="font-size:14px"> &nbsp; Delivery by 23 Jul, Tuesday | &nbsp; <span class="text-success">FREE</span> </p>
      </div>
 
         <div class="row mt-2">
      <div class="row">    
        <div class="dropdown show" style="padding-left:25px;"> <a class="btn btn-secondary dropdown-toggle" style="background-color:#192a56; height:30px; width:auto; font-size:10px;" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select sizes </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="#">small</a> <a class="dropdown-item" href="#">medium </a> <a class="dropdown-item" href="#">large</a> </div>
        </div>
        <div class="dropdown show" style="padding-left:25px;"> <a class="btn btn-secondary dropdown-toggle"  style="background-color:#192a56; height:30px; width:auto; font-size:10px;"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select quantity </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="#">small</a> <a class="dropdown-item" href="#">medium </a> <a class="dropdown-item" href="#">large</a> </div>
        </div>  
          <div class="dropdown show" style="padding-left:25px;"> <a class="btn btn-secondary dropdown-toggle" style="background-color:#192a56; height:30px; width:auto; font-size:10px;"  href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Select material type </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink"> <a class="dropdown-item" href="#">small</a> <a class="dropdown-item" href="#">medium </a> <a class="dropdown-item" href="#">large</a> </div>
        </div>    
        </div>  
      </div>
     
      <div class="container-fluid justify-content-left">
       <div class="row">
         <div class="col-1"><img class="img-fluid">
            <div class="product-grid2Color">
                <div class="product-imageColor">
                    <a href="#">
                         <img class="pic-2Color" src="https://images-na.ssl-images-amazon.com/images/I/41HkeLSU6HL._SX38_SY50_CR,0,0,38,50_.jpg">
                    </a>
                    <ul class="colorHover">
                        <li><a href="http://google.com" data-tip="Black"></a></li>
                    </ul>
                </div>
             </div>
        </div>
         <div class="col-1"><img class="img-fluid">
            <div class="product-grid2Color">
                <div class="product-imageColor">
                    <a href="#">
                         <img class="pic-2Color" src="https://images-na.ssl-images-amazon.com/images/I/51ZnL47T3VL._SX38_SY50_CR,0,0,38,50_.jpg">
                    </a>
                    <ul class="colorHover">
                        <li><a href="http://google.com" data-tip="White"></a></li>
                    </ul>
                </div>
             </div>
        </div>
          <div class="col-1"><img class="img-fluid">
            <div class="product-grid2Color">
                <div class="product-imageColor">
                    <a href="#">
                         <img class="pic-2Color" src="https://images-na.ssl-images-amazon.com/images/I/91F5l91hhoL._AC_SY741._SX._UX._SY._UY_.jpg">
                    </a>
                    <ul class="colorHover">
                        <li><a href="http://google.com" data-tip="Navy Blue"></a></li>
                    </ul>
                </div>
             </div>
        </div>    
          <div class="col-1"><img class="img-fluid">
            <div class="product-grid2Color">
                <div class="product-imageColor">
                    <a href="#">
                         <img class="pic-2Color" src="https://images-na.ssl-images-amazon.com/images/I/51Owv2h1D9L._SX38_SY50_CR,0,0,38,50_.jpg">
                    </a>
                    <ul class="colorHover">
                        <li><a href="http://google.com" data-tip="Blue"></a></li>
                    </ul>
                </div>
             </div>
        </div>    
          <div class="col-1"><img class="img-fluid">
            <div class="product-grid2Color">
                <div class="product-imageColor">
                    <a href="#">
                         <img class="pic-2Color" src="https://images-na.ssl-images-amazon.com/images/I/41I08R8d8AL._SX38_SY50_CR,0,0,38,50_.jpg">
                    </a>
                    <ul class="colorHover">
                        <li><a href="http://google.com" data-tip="Red"></a></li>
                    </ul>
                </div>
             </div>
        </div>    
          <div class="col-1"><img class="img-fluid">
            <div class="product-grid2Color">
                <div class="product-imageColor">
                    <a href="#">
                         <img class="pic-2Color" src="https://images-na.ssl-images-amazon.com/images/I/51ZnL47T3VL._SX38_SY50_CR,0,0,38,50_.jpg">
                    </a>
                    <ul class="colorHover">
                        <li><a href="http://google.com" data-tip="White"></a></li>
                    </ul>
                </div>
             </div>
        </div>      
        </div>
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
import {mapGetters,mapMutations} from 'vuex'
export default {
    data(){
        return{
            shortDesc : ''
        }
    },
    methods:{
      loadDescriptions(){
        this.shortDesc=(this.getProduct.shortDescription.split('|'))
       
      }
    },

    computed:{
      ...mapGetters([
        
        'getProduct'
      ]),
    },
   mounted(){
     setTimeout(this.loadDescriptions,500)
    
   }
   
    

}
</script>

<style scoped>
.product-imageColor{border-style:solid; border-width:1px; border-color:lightgray; height:50px;  width:40px;}
.pic-2Color{width:100%; height:100%; padding:0px;}
.product-grid2Color{width:50px;}
.colorHover{margin-left:10px; position:relative; bottom:0px;}
.colorHover li{margin:0 0 0px;display:inline;}
.colorHover a:after,.product-grid2Color .colorhover li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:8px;line-height:22px; border-radius:3px;padding:0 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.colorHover a:hover:after,.product-grid2Color .colorHover li a:hover:before{opacity:1} 
</style>