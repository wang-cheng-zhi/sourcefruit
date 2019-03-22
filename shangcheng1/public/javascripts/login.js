$(function(){
  $("#zhuce").on("click",function(){
    location.href = "/regist";
  });
  $("#denglu").on("click",(e)=>{
    e.preventDefault();
    $.post("/users/login",{username:$("#username").val(),password:$("#password").val()}).done((data)=>{
      if(data==0){
          alert("用户名或密码错误！")
      }
      if(data==1){
        location.href = "/";
      }
    })
  })
})