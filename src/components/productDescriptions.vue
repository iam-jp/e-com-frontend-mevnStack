<template>
<div>
<div class="container-fluid" style="margin-left:30px; margin-top:0px; margin-right:30px;">
               
  <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
   <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
  </li>
  <li class="nav-item">
   <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Specifications</a>
  </li>
  <li class="nav-item">
   <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><p style="padding-top:10px; font-size:14px">{{getProduct.longDescription}}</p></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">{{getProduct}}</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
</div>
   

</div>
     
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{

        }
    },
    
    computed:{
      ...mapGetters([
        'getProduct'
      ])

    }
}
</script>

<style scoped>

</style>