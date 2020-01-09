<div>

  <!-- header -->  
<nav class="navbar fixed-top navbar-expand-md navbar-dark" style="background-color:white;">
    <div class="container-fluid" style="height:40px;">
      <!-- router link  (logo) -->
      <router-link to="/"  active-class="active" exact>
      <a class="navbar-brand">
        <img src="./../../assets/Logo-01.png" height="120" width="170"> </a>
        </router-link>
       
       <!-- input (location)  -->
         <input type="text" class="form-control mb-12 mr-sm-12" placeholder="Location" style="width: 250px">
          <span> 
            <i class="fa fa-map-marker" aria-hidden="true" style="font-size:30px;color:teal; margin-left: 20px"></i>
          </span>
        <!-- page navigations -->
        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
             <ul class="navbar-nav">
              <!--icons(offers)-->
               <div class="input-group input-group-sm">
                 <i class="fa fa-percent" aria-hidden="true" style="font-size:20px;color:teal; margin-left: 10px; margin-top:10px"></i>
                 </div>
            <!-- router link (offers) -->
             <router-link to="#"  active-class="active" exact><a class="nav-link" style="color:black; font-size: 12px;" >Offers</a></router-link>

              <!--icons(account)-->
                <div class="input-group input-group-sm">
                   <i class="fa fa-user" aria-hidden="true" style="font-size:20px;color:teal; margin-left: 10px; margin-top:10px"></i>
                   </div>
            <!-- router link (account) -->
                <router-link to="#"  active-class="active" exact><a class="nav-link" style="color:black" >Account</a></router-link>

            <!--icons(wishlist)-->
               <div class="input-group input-group-sm">
                  <i class="fa fa-heart" aria-hidden="true" style="font-size:20px;color:teal; margin-left: 10px; margin-top:10px"></i>
                  </div> 
            <!-- router link (wishlist) -->
                <router-link to="#"  active-class="active" ><a class="nav-link" style="color:black" >Wishlist</a></router-link>
             </ul>  

            <!--search bar-->
            <form class="form-inline my-2 my-lg-0">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search...">
                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary btn-number">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                </form>

                <!-- router link (cart) -->
                  <router-link to="#"  active-class="active" >
                    <a class="btn btn-success btn-sm ml-3" style="color:white">
                      <i class="fa fa-shopping-cart"></i> Cart
                    <span class="badge badge-pill badge-danger">1</span>
                    </a>
                    </router-link>
        </div>
    </div>
</nav>