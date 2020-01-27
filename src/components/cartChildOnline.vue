<template>
    <div>
        <div class="leftbox" >
        <div class="row">
            
            <cartHead storeName = 'Exclusive products' :count = getOnlineCart.length></cartHead>

            <cartTotal></cartTotal>
   

   
            <div class="col" style="margin-top:20px; width:500px;"  v-for ="(store , i) in getOnlineCart" :key ="i">
       
                <div class="ibox-content">
                    <div class="table-responsive">
                        <table class="table shoping-cart-table">
                        <tbody>
                        <tr>
                        <td>
                <img class="cart-product-image" :src=store.product.baseImage>
                </td>
                        <td class="desc">
                        <h3><a href="#" class="text-navy">{{store.product.title}}</a> </h3>
                <div class="m-t-sm">
                 <a href="#" class="text-muted"><i class="fa fa-trash"></i> Remove item</a>
                 </div>
                 </td>
                 <td>&#8377;{{store.product.price}}<s class="small text-muted">&#8377;230.00</s></td>
                 <td width="100">
                  <div class="input-group mb-2">
                  <div class="input-group">
                    <span class="input-group-prepend">
                    <button class="btn btn-danger" data-type="minus" data-field="quant[2]" style="width:5px; font-size:6px; height:30px; text- align:center;">
                    <span><i class="fa fa-minus" aria-hidden="true" ></i></span></button></span>
                    <input type="numeric" :placeholder=store.counter style="width:25px; height:30px; font-size:12px; text-align:center;">
                    <span class="input-group-append">
                         <button class="btn btn-success" data-type="plus" data-field="quant[2]" style="width:10px; font-size:6px; height:30px;">
                         <span><i class="fa fa-plus" aria-hidden="true" style="text-align:center;"></i></span>
                        </button>
                    </span>
                    </div>
                </div>
                </td>
                                <td>
                                    <h4 style="font-size:18px; margin-top:5px;">
                                        &#8377;{{store.product.price}}
                                    </h4>
                                </td>
                              </tr>
                           </tbody>
                        </table>
                       </div>
                    </div>
                </div>
</div>

</div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import cartHead from './cartChildHead'
import cartTotal from './cartTotal'
export default {
    data(){
        return{

        }
    },
    components:{
        cartHead,cartTotal
    },
    computed:{
        ...mapGetters([
            'getOnlineCart'
        ])
    }
}
</script>

<style scoped>
h3 {
    font-size: 14px;
}
.text-navy {
    color: #1ab394;
}
.cart-product-image{height:80px; width:70px;}
.product-desc {
  padding: 20px;
  position: relative;
}
.ecommerce .tag-list {
  padding: 0;
}
.ecommerce .fa-star {
  color: #d1dade;
}
.ecommerce .fa-star.active {
  color: #f8ac59;
}
.ecommerce .note-editor {
  border: 1px solid #e7eaec;
}
table.shoping-cart-table {
  margin-bottom: 0;
}
table.shoping-cart-table tr td {
  border: none;
  text-align: right;
}
table.shoping-cart-table tr td.desc,
table.shoping-cart-table tr td:first-child {
  text-align: left;
}
table.shoping-cart-table tr td:last-child {
  width: 80px;
}
.ibox {
  clear: both;
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
}
.ibox.collapsed .ibox-content {
  display: none;
}
.ibox:after,
.ibox:before {
  display: table;
}

.ibox-content {
  background-color: #ffffff;
  color: inherit;
  padding: 15px 10px 20px 20px;
  border-color: #e7eaec;
  border-image: none;
  border-style: none solid solid solid;
  border-width: 1px 0;
}
.ibox-footer {
  color: inherit;
  border-top: 1px solid #e7eaec;
  font-size: 90%;
  background: #ffffff;
  padding: 10px 15px;
}
.card{text-align: center;
}
   
.leftbox {
    margin-top:5%;
   float:right;  
   width:50%;
   height:auto;
} 
</style>