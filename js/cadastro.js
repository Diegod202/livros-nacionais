


document.getElementById("form-cadastro").addEventListener("submit", function(e){
  e.preventDefault();

  // pega valores
  var nome  = document.getElementById("nome").value.trim();
  var email = document.getElementById("email").value.trim().toLowerCase();
  var senha = document.getElementById("senha").value;

  // pega elementos de erro e feedback
  var errNome  = document.getElementById("err-nome");
  var errEmail = document.getElementById("err-email");
  var errSenha = document.getElementById("err-senha");
  var okMsg    = document.getElementById("ok-msg");

  // começa escondendo tudo
  errNome.hidden = errEmail.hidden = errSenha.hidden = true;
  okMsg.hidden = true;

  // validações
  if(nome === ""){
    errNome.hidden = false;
    return;
  }
  if(!/\S+@\S+\.\S+/.test(email)){
    errEmail.hidden = false;
    return;
  }
  if(senha.length < 6){
    errSenha.hidden = false;
    return;
  }

  // se passou: salva no localStorage
  var user = { nome:nome, email:email, senha:senha };
  localStorage.setItem("ln_user", JSON.stringify(user));

  // mostra mensagem de sucesso
  okMsg.hidden = false;
});
