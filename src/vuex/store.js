import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        product:'',
        store:'',
        user:{},
        storeCart:[],
        onlineCart:{},
        wishlist:{
            realProducts:[],
            onlineProducts:[]
        },
        cart:{},
        storesInCart:[]
    },
    getters:{
        getProduct:state=>{
            return state.product
        },
        getStore:state=>{
            return state.store
        },
        getDesc:state=>{
            
            return (state.product.shortDescription.split('|'))
        },
        getToken:state=>{
            return state.user 
        },
        getCart:state=>{
            return state.storeCart
        },
        getCartCount:state=>{
                return state.storeCart.length 
        },
        seperateCart:state=>{
            return state.cart
        },
        getOnlineCart:state=>{
            return state.onlineCart
        }
        
    },
    mutations:{
        saveProduct(state,data){
            state.product = data
            
        },

        saveStore(state,data){
            state.store= data
        },

        saveUser(state,data){

            state.user.profile = data.user
            state.user.token=data.token
            
        },

        clearToken(state){
            state.user.token = null
            state.user.profile= null
            localStorage.setItem('user',null)
            localStorage.setItem('token',null)
            
        },

        toCart(state,data){
        //    console.log(data)
            state.storeCart = data
        },

        toWishlist(state,data){
            state
        },

        seperateCart(state,data){
           state.cart = data
        },

        getOnlineCart(state,data){
            state.onlineCart= data
        }
    
    },
    actions:{
        saveProduct({commit},payload){
           commit('saveProduct',payload.res.data)
        },

        saveUser({commit},payload){

            localStorage.setItem('user',payload.data.user)
            localStorage.setItem('token',payload.data.token)

            commit('saveUser',{
                user:payload.data.user,
                token:payload.data.token
            })

           
        },

        getStore({commit},payload){
            
            commit('saveStore',payload)
        },

        clearToken({commit}){
            commit('clearToken')
        },

        tryAutoLogin({commit}){
            const token = localStorage.getItem('token')
            const user = localStorage.getItem('user')

            commit('saveUser',{
                token,user
            })
        },

        toCart({commit},payload){
            
            commit('toCart',payload)
        },

        toWishlist({commit},payload){
            commit('to',payload)
        },

        getCart({commit},payload){
            commit('toCart',payload)
        },

        seperateCart({commit},payload){
            commit('seperateCart',payload)
        },

        getOnlineCart({commit},payload){
            commit('getOnlineCart',payload)
        }
    }

})