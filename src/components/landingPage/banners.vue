<template >

    <div id="menu-outer">
      
        <div class="container-fluid text-center my-12" >
         
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
        <div class="carousel-inner w-100" role="listbox">
        <div class="carousel-item row no-gutters active" style="margin-top:15px; margin-bottom:15px;" >
         
                <div class="col-3 float-left" v-for="(file) in 4" v-bind:key="file"><img class="img-fluid" :src="'data:image/jpeg;base64,'+files[file]" style="padding:5px; height:220px; width:250px;"></div>
                
            </div>
        <div class="carousel-item row no-gutters" style="margin-top:15px; margin-bottom:15px;">
          <div class="col-3 float-left" v-for="(file) in 4" v-bind:key="file"><img class="img-fluid" :src="'data:image/jpeg;base64,'+files[file+3]" style="padding:5px; height:220px; width:250px;"></div>
                
            </div>
        </div>
        <a href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev carousel-control-prev-icon" aria-hidden="true" style="margin-top: 120px;"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a href="#recipeCarousel" role="button" data-slide="next">
           
            <span class="carousel-control-next carousel-control-next-icon" aria-hidden="true" style="margin-top: 120px;"></span>
            <span class="sr-only">Next</span>
        </a>
</div>

</div>  
   
</div>
           
    
</template>

<script>


import axios from 'axios'



export default {
  data(){
        return{
            // files:[],
            // count:0
            
        }
    },
    
    mounted () {
      var vm =this
    axios.get('http://thejasshop.com:5000/bannerupload')
      .then(res => {
        res.data
        .forEach(data=>{
            
            const typedArray = new Uint8Array(data.image.data)
            const stringChar = String.fromCharCode.apply(null,typedArray) 
            const base64string = btoa(stringChar)
            vm.files.push(base64string)
            })
            vm.count = vm.files.length
           console.log(vm.files.length)
      })
    },
    props:['files']
  
}

</script>

<style scoped>
#menu-outer {
height:250px;
background-color:#171a29;
margin-top:5%
}
</style>