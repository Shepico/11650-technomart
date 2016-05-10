//Вход в кабинет пользователя
      var btnLoginEnter = document.querySelector(".lp-login-enter");
      var btnLoginExit = document.querySelector(".icon-logout");
      var panelLogin = document.querySelector(".lp-login-registr");
      var panelUser = document.querySelector(".lp-login-user-panel");
      
      btnLoginEnter.addEventListener("click", function (event) {
        event.preventDefault();
        panelLogin.classList.toggle("not-visible");
        panelUser.classList.toggle("not-visible");
      });
      
      btnLoginExit.addEventListener("click", function (event) {
        event.preventDefault();
        panelLogin.classList.toggle("not-visible");
        panelUser.classList.toggle("not-visible");
      });
      
      //Окно покупки
      var btnBuy = document.querySelectorAll(".item-actions-buy");
      var WindowAddCart = document.querySelector(".add-cart-window");
      var btnWindowAddCartClose = document.querySelector(".btn-add-cart-close"); 
      var PanelBasket = document.querySelector(".iu-basket");
      
      
      for (var i = 0; i < btnBuy.length; i++) { 
        btnBuy[i].addEventListener("click", function (event) {
          event.preventDefault();
          WindowAddCart.classList.toggle("not-visible");           
          if (PanelBasket.classList.contains) {
            PanelBasket.classList.add("background-red");
          }
          
        });    
      } ;
           
      btnWindowAddCartClose.addEventListener("click", function(event){
        event.preventDefault();
        WindowAddCart.classList.add("not-visible");        
      });
      
      window.addEventListener("keydown", function(event){
        if (event.keyCode === 27) {
          WindowAddCart.classList.add("not-visible");
        }
      });
            
      //Закладки Красный пункт
      var btnBookmark = document.querySelectorAll(".item-actions-bookmark");
      var PanelBookmark = document.querySelector(".iu-marker");
      
      
      for (var i = 0; i < btnBookmark.length; i++) { 
        btnBookmark[i].addEventListener("click", function (event) {
          event.preventDefault();
          if (PanelBookmark.classList.contains) {
            PanelBookmark.classList.add("background-red");
          }
          
        });    
      } ;
      /*//Поиск по щелчку
      var btnSearch = document.querySelector(".search-form");
      var labelSearch = document.querySelector(".search-form>label");
      var iconSearch = document.querySelector(".icon-search");
      var inputSearch = document.querySelector(".input-search");
      
      btnSearch.addEventListener("click", function(event){
        event.preventDefault();
        inputSearch.classList.toggle("not-visible"); 
        labelSearch.classList.toggle("not-visible");         
      });
      
      inputSearch.addEventListener("click", function(event){
        event.preventDefault();
        inputSearch.classList.toggle("not-visible"); 
        labelSearch.classList.toggle("not-visible");         
      });*/
            