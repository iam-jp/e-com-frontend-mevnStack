<template>
<div>
    <div class="container=fluid">
<div class="row" style="width:1400px; margin-left:0px;" >
<div class="col-md-6" style="margin-top:0px; height:50px;">
                <div class="ibox-title" style="background-color:#192a56" >
                    <span class="pull-right" style="font-size:12px; color:white; margin-right:20px; margin-top:8px;">(<strong>{{count}}</strong>) items</span>
                    <h5 style="font-size:14px; color:white;">
                        <a class="btn btn btn-sm ml-1" href="cart.html" style="background-color:#192a56; color:white; font-size:16px;">{{storeName}}</a>- Instant  Delivery</h5>
                </div>
               
           </div>
       
</div>
</div>

</div>
</template>

<script>
import cartTotal from './cartTotal'
export default {
    data(){
        return{

        }
    },
    components:{
        cartTotal
    },
    props:['storeName','count']
}
</script>

<style scoped>
.ibox-title {
  /* -moz-border-bottom-color: none;
  -moz-border-left-color: none;
  -moz-border-right-color: none;
  -moz-border-top-color: none; */
  background-color: #ffffff;
  border-color: white;
  border-image: none;
  border-style: solid solid none;
  border-width: 3px 0 0;
  color: inherit;
  margin-bottom: 0;
  padding: 14px 15px 7px;
  min-height: 48px;
}
</style>