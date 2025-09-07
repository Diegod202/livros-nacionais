// login.js (bem simples)

document.getElementById("form-login").addEventListener("submit", function(e){
  e.preventDefault();

  var email = document.getElementById("lemail").value.trim().toLowerCase();
  var senha = document.getElementById("lsenha").value;

  var errEmail = document.getElementById("lerr-email");
  var errSenha = document.getElementById("lerr-senha");
  var okMsg    = document.getElementById("l-ok");
  var failMsg  = document.getElementById("l-fail");

  // limpa tudo
  errEmail.hidden = errSenha.hidden = true;
  okMsg.hidden = failMsg.hidden = true;

  // validações básicas
  if(!/\S+@\S+\.\S+/.test(email)){
    errEmail.hidden = false;
    return;
  }
  if(senha.length < 6){
    errSenha.hidden = false;
    return;
  }

  // tenta pegar usuário cadastrado
  var salvo = localStorage.getItem("ln_user");
  var user  = salvo ? JSON.parse(salvo) : null;

  var loginOk = false;
  if(user){
    loginOk = (email === user.email && senha === user.senha);
  } else {
    // fallback: usuário demo
    loginOk = (email === "demo@demo.com" && senha === "123456");
  }

  if(loginOk){
    okMsg.hidden = false;
    setTimeout(function(){ window.location.href = "index.html"; }, 1000);
  } else {
    failMsg.hidden = false;
  }
});
