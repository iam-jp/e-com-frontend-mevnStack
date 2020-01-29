<template>
<!-- eslint-disable -->
<div>
  <!-- header -->  
<nav class="navbar fixed-top navbar-expand-md navbar-dark" style="background-color:white; border-bottom:1px solid whitesmoke;">
    <div class="container-fluid" style="height:50px;">
       <!-- router link  (logo) -->
      <router-link to="/"  active-class="active" exact>
      <a class="navbar-brand">
        <img src="./../../assets/Logo2.png" > </a>
        </router-link>
       
        <!-- input (location)  -->
        <span> 
          <i class="fa fa-map-marker" aria-hidden="true" style="font-size:22px;color:teal; padding-right:10px;" @click="locationFetching()"></i>
          </span>
         <input type="text" :placeholder=address style="width:230px; height:35px; outline:0; border-width: 0 0 1px; border-color:forestgreen; font-family:roboto; font-weight:300;">
        
         <!-- page navigations -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
            <ul class="navbar-nav">
            <!--icons(offers)-->
              <div class="input-group input-group-sm">
                 <i class="fa fa-percent" aria-hidden="true" style="font-size:14px;color:teal; margin-left:30px; margin-top:10px"></i>
             </div> 
              <!-- router link (offers) -->
                  
                <router-link to="#" tag="li" active-class="active" exact><a class="nav-link" style="color:black; font-size: 12px;" >Offers</a></router-link>
              
               <!--icons(account)-->
                <div class="input-group input-group-sm"> 
                  <i class="fa fa-user" aria-hidden="true" style="font-size:14px;color:teal; margin-left:20px; margin-top:10px"></i>
                </div>
                 <!-- router link (account) -->
                <router-link to="#" tag="li"  active-class="active" ><a class="nav-link" style="color:black; font-size: 12px; text-decoration:none;" >Account </a></router-link>
              
              <!--icons(wishlist)-->
               <div class="input-group input-group-sm"> 
                 <i class="fa fa-heart" aria-hidden="true" style="font-size:14px;color:teal; margin-left:20px; margin-top:10px"></i>
               </div>
               <!-- router link (wishlist) -->
              <router-link to="#" tag="li" active-class="active" exact><a class="nav-link" style="color:black; font-size:12px; padding-right:20px">Wishlist</a></router-link>
            </ul>
            <!--- login button --->

             <div class="input-group input-group-sm" style="height:30px; width:100px;margin-right:10px">
                    

                    <div class="input-group-append">
                        <button type="button"
                        class="btn btn-success btn-sm ml-3" 
                        style="background-color:white;color:black;border:none;font-size:12px"
                        @click="showModal">
                            Login 
                        </button>
                    </div>
                </div>

                <login 
                v-show="isModalVisible"
                @close="closeModal"
                />

              <!-- search bar -->
                <div class="input-group input-group-sm" style="height:30px; width:150px;">
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search...">

                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary btn-number" style="background-color:forestgreen">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                 <!-- router link (cart) -->
                <router-link to="/user/profile/cart" active-class="active" exact>
                  <a class="btn btn-success btn-sm ml-3"  style="background-color:forestgreen; color:white"
                  @click="cart()">
                    <i class="fa fa-shopping-cart"></i> Cart
                    <span class="badge badge-pill badge-danger">{{getCartCount}}</span>
                </a></router-link>
        </div>
    </div>
</nav>



</div>
</template>

<script>
import axios from 'axios'
import login from './../login'
import {mapGetters} from 'vuex'
import  store from './../../vuex/store'

export default {
  data(){
    return {
      storeName:[],
      products:{},
      onlineProducts:[],
      address : '',
      active: false,
      isModalVisible: false,
      user:{},
      stores:'',
      filteredStores:[],
      geoCode:''
    }
  },
  
  methods:{
    locationFetching(){
      this.coordinateFetching()
     
      // console.log(this.getLocation)
      
      
      // console.log(this.getLocation)
      // console.log(store.state.longitude)
      
      
      },

      

    showModal() {
        this.isModalVisible = true;
      },
    closeModal() {
        this.isModalVisible = false;
      },
    cart(){
      if(store.state.user.token){
        this.storeSeparation(this.getCart)
        this.$store.dispatch('seperateCart',this.products)
        this.onlineProductSeperation(this.getCart)

      }else{
        this.isModalVisible= true
      }
    },
    storeSeparation(cart){
           
            cart.forEach((ele)=>{
                if(ele.storeProduct && !this.storeName.includes(ele.storeName)){
                    this.storeName.push(ele.storeName)   
                }
                
            })
            this.storeName.forEach((name)=>{
              
              this.products[name] = new Array()
            this.productRepitor(this.getCart,name,this.products[name])
                
            })
            // console.log(this.products)
        },
        productRepitor(cart,name,array){
           cart.forEach((ele)=>{
               if(ele.storeName == name && ele.storeProduct){
                   array.push(ele)
               }
           })      
        },
        onlineProductSeperation(cart){
          cart.forEach((ele)=>{
            if(!ele.storeProduct){
              this.onlineProducts.push(ele)
            }
          })
          this.$store.dispatch('getOnlineCart',this.onlineProducts)
        },

     filterStores(stores){
         const centre = new Object
       const check = new Object
       const table = []
      //  const n = false
       stores.forEach((store)=>{
         centre.lat=this.getLocation.latitude
         centre.lng = this.getLocation.longitude
         console.log(centre)
         
         check.lat =store.location.coordinates[1]
         check.lng =store.location.coordinates[0]
         
        const n = this.inCircle(check,centre,2)
         table.push(n)
         if(n){
           if(!this.filteredStores.includes(store)){
             this.filteredStores.push(store)
           }
           
         }
        
       })
       console.log(table)
     

       this.$store.dispatch('setUserStores',this.filteredStores)

       
     },

     inCircle(checkPoint,centerPoint,km){
          const ky = 40000 / 360;
          const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
          console.log(kx)
          const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
          console.log(dx)
          const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
          console.log(dy)
          return Math.sqrt(dx * dx + dy * dy) <= km;
        },

      coordinateFetching(){
       
          navigator.geolocation.watchPosition((position)=>{
            this.$store.dispatch('setLocation',position.coords)
            this.filterStores(store.state.allStores)
            
          this.geoCode = position.coords
          axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+position.coords.latitude+','+position.coords.longitude+'&key=AIzaSyC6Iv_6H0K5_2QqS25o6hD3EiHcgwxF6gc')
      .then(res=>{
        this.address = (res.data.results[0].formatted_address)
        console.log(res.data.results)
        
      })
        })
        
         }
  },
  computed:{
    ...mapGetters([
      'getToken',
      'getCartCount',
      'getCart',
      'getLocation',
      'getAllstores'
    ])
  },
  components:{
    login
  },
  
}
</script>

<style scoped>

</style>
