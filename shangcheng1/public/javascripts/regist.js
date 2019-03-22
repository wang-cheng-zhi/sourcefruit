$(function(){
    $("#denglu").on("click",function(){
       location.href= "/login";
    });
    $(function(){
      $("#denglu").on("click",()=>{
        location.href= "/login";
      });
      $("#zhuce").on("click",(e)=>{
        e.preventDefault();
        $.post("/users/regist",{username:$("#username").val(),password:$("#password").val()}).done((data)=>{
           if(data==0){
             console.log("0")
             //$(".tip").html("用户名已注册");
           }
           if(data==1){
             $(".tip").html("注册成功");
             location.href = "/login";
           }
        })
      })
   })
})