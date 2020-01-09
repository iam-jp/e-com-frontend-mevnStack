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
                <a href="#" class="btn btn-success" style="background-color:#2c2c54;font-size:10px; width:80px; height:30px; margin-bottom:10px;">Add to cart</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter:1
        }
    },
    methods:{
        addCount(){
      this.counter++
    },
    decreaseCount(){
      if(this.counter>1){
         this.counter--
      }
    }
    }
}
</script>

<style scoped>

</style>