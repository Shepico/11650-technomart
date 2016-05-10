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
      
      
      //Всплывающее окно
      var btnFeedbackOpen = document.querySelector(".contact-but");
      var btnFeedbackClose = feedback.querySelector(".btn-feedback");      
      var formFeedback = document.querySelector(".feedback");
      
      var f_name = feedback.querySelector("[id=name-field]");
      var f_email = feedback.querySelector("[id=email-field]");
      var f_content = feedback.querySelector("[id=content-field]");
      
      var storage_name = localStorage.getItem("f_name");
      var storage_email = localStorage.getItem("f_email");
      
      
      btnFeedbackOpen.addEventListener("click", function(event){
        event.preventDefault();
        formFeedback.classList.toggle("not-visible");
        if (storage_name) {
          f_name.value = storage_name;          
        }
        
        if (storage_email) {
          f_email.value = storage_email;
        }        
        f_content.focus();
        f_content.value = "";
      });
      
      btnFeedbackClose.addEventListener("click", function(event){
        event.preventDefault();
        formFeedback.classList.add("not-visible");
      });
      
      formFeedback.addEventListener("submit", function(event){
        event.preventDefault();
        if (!f_name.value) {
          f_name.classList.add("error-fields");
        } else{
          if (f_name.classList.contains("error-fields")) {
            f_name.classList.remove("error-fields");
          }          
          localStorage.setItem("f_name", f_name.value);
        }  
        
        if (!f_email.value) {
          f_email.classList.add("error-fields");
        } else{
          if (f_email.classList.contains("error-fields")) {
            f_email.classList.remove("error-fields");
          }          
          localStorage.setItem("f_email", f_email.value);
        }  
        
        if (!f_content.value) {
          f_content.classList.add("error-fields");
        } else{
          if (f_content.classList.contains("error-fields")) {
            f_content.classList.remove("error-fields");
          }                    
        }  
      });
      
      window.addEventListener("keydown", function(event){
        if (event.keyCode === 27) {
          formFeedback.classList.add("not-visible");
        }
      });
      //Большая карта
      var btnBigMap = document.querySelector(".open-bigmap");
      var panelBigMap = document.querySelector(".map-big");
      
      var btnBigMapClose = document.querySelector(".btn-map");      
      
      btnBigMap.addEventListener("click", function(event){
        event.preventDefault();
        panelBigMap.classList.toggle("not-visible");
      });
      
      btnBigMapClose.addEventListener("click", function(event){
        event.preventDefault();
        panelBigMap.classList.add("not-visible");
      });
      /*//Окно покупки
      var btnBuy = document.querySelectorAll(".item-actions-buy");
      
      for (var i = 0; i < btnBuy.length; i++) { 
        i.addEventListener("click", function (event) {
          event.preventDefault();
          console.log(this); 
        });    
      } ;*/
      
            