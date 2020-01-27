<template>
    <div class="input-group mb-2" style="margin-left:15px;">
        <div class="input-group">
            <span class="input-group-prepend">
                <button class="btn btn-danger" data-type="minus" data-field="quant[2]" 
                style="width:5px; font-size:6px; height:30px; text- align:center;"
                @click="decreaseCount()">
                    <span><i class="fa fa-minus" aria-hidden="true" ></i></span>
                </button>
            </span>

            <input type="numeric" :placeholder=counter style="width:25px; height:30px; font-size:12px; text-align:center;">

            <span class="input-group-append">
                <button class="btn btn-success" data-type="plus" data-field="quant[2]"
                 style="width:10px; font-size:6px; height:30px;"
                 @click="addCount">
                    <span><i class="fa fa-plus" aria-hidden="true" style="text-align:center;"></i></span>
                </button>
            </span>

            <span class="input-group-append">
                <button  
                class="btn btn-success" 
                style="background-color:#2c2c54;font-size:10px; width:80px; height:30px; margin-bottom:10px;"
                @click="cart()">Add to cart</button>
            </span>
        <login 
        v-show="isModalVisible"
        @close="closeModal"
        />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import login from './../login'
import {mapGetters} from 'vuex'
import store from './../../vuex/store'
export default {
    data(){
        return{
            counter:1,
            isModalVisible:false,
            toCart:{}
        }
    },
    methods:{
        addCount(){
           
                if(store.state.user.token){
                    this.counter++
                    
                }else{
                    this.isModalVisible=true
                    
                }   
            
            
            },

        decreaseCount(){
            if(store.state.user.token){
                
                if(this.counter>1){
                   
                this.counter--
                }
            }else{
                
                this.isModalVisible = true
            }
            
            },
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        cart(){
            if(store.state.user.token){
                const vm = this
                this.toCart.counter = this.counter
                this.toCart.product = this.product
                this.toCart.storeName = this.storeName
                this.toCart.storeProduct = this.storeProduct
               
                this.apiToCart(this.toCart)
                this.getapiCart()

               
                
                
               
               
            }
            else{
                this.isModalVisible = true
            }
        },
        apiToCart(toCart){
             const axiosInstance = axios.create({
                    baseURL:'http://localhost:5000/'
                })
                axiosInstance({method:'PATCH',
                url:'user/to_cart',
                data:toCart,
                headers:{Authorization: `Bearer ${this.$store.state.user.token}`}})
                .then((res)=>{
                    console.log(res.data)
                     this.$store.dispatch('toCart',res.data)
                })
        },

            getapiCart(){
                const axiosInstance = axios.create({
                    baseURL:'http://localhost:5000/'
                })
                axiosInstance({method:'get',
                url:'user/me',
                headers:{Authorization: `Bearer ${this.$store.state.user.token}`}})
                .then((res)=>{
                  console.log(res.data.cart)
                   return res.data.cart

                })
        }
        
    },
    computed:{
        ...mapGetters([
            'getToken',
            'getProduct',
            'getCart'
        ])
    },
    components:{
        login
    },
    props:['storeName','product','storeProduct']
}
</script>

<style scoped>

</style>