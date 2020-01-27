<template>

  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          
            <!-- This is the default tile! -->
<slot name="header">
            <button
            style="align:left;"
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
           
              <div class="container">
<div class="d-flex justify-content-center h-100">
<div class="card">
<div class="card-header">
<h3>Sign In</h3>
<div class="d-flex justify-content-end social_icon">
<span><i class="fa fa-facebook-square"></i></span>
<span><i class="fa fa-google-plus-square"></i></span>
</div>
</div>
<div class="card-body">
<form>
<div class="input-group form-group">
<div class="input-group-prepend">
<span class="input-group-text"><i class="fa fa-user"></i></span>
</div>
<input type="text" class="form-control" placeholder="email" autocomplete="email" v-model="email">

</div>
<div class="input-group form-group">
<div class="input-group-prepend">
<span class="input-group-text"><i class="fa fa-key"></i></span>
</div>
<input type="password" class="form-control" placeholder="password" autocomplete="current-password" v-model="password">
</div>
<div class="row align-items-center remember">
<input type="checkbox">Remember Me
</div>
<div class="form-group">
<input type="submit" value="Login" class="btn float-right login_btn" @click="login()">
</div>
</form>
</div>
<div class="card-footer">
<div class="d-flex justify-content-center links">
Don't have an account?<a href="#" style="color:#FFC312">Sign Up</a>
</div>
<div class="d-flex justify-content-center">
<a href="#" style="color:#FFC312">Forgot your password?</a>

<button @click="signOut()">sign out</button>
</div>
</div>
</div>
</div>
</div>

          </slot>
        </section>
        
      </div>
    </div>
  </transition>

</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import store from './../vuex/store'
  export default {
    name: 'modal',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      login(){
          axios.post('http://localhost:5000/user/login',{email:this.email,password:this.password})
          .then((response)=>{
            //   console.log(response)
              this.$store.dispatch('saveUser',response)
            
          })
          if(store.state.user.token){
              this.close()
          }
      },
      signOut(){
          const axiosInstance = axios.create({
            baseURL:'http://localhost:5000/'
          })
          axiosInstance({method:"POST",url:'user/logout_all',
          headers:{Authorization: `Bearer ${this.$store.state.user.token}`}})
          .then((res)=>{
            this.$store.dispatch('clearToken')
            this.close()
          })
          
      }
    },
    computed:{
        ...mapGetters([
            'getToken'
        ])
    }
  };
</script>

<style scoped>
.modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 50%;
  }

  .modal-fade-enter-active
  {
    transition: opacity .5s ease
  }

  .modal-backdrop {
    /* position: absolute; */
    float:right;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    /* background: #FFFFFF; */
    /* box-shadow: 2px 2px 20px 1px; */
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    
    margin-left:63% ;
    height:700px;
    width:500px
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid transparent; 
    color: #4AAE9B;
     justify-content: space-between;
    background-color: #171a29
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    background-color: #192a56
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }


.begin{
    margin-top: 6%
}
.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: 60px;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}

.social_icon span:hover{
color:orangered;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: white;
background-color:orangered;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
</style>