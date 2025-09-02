
const ID_LS = "ln_user"; 
const $form = document.getElementById("form-cadastro");
const $nome = document.getElementById("nome");
const $email = document.getElementById("email");
const $senha = document.getElementById("senha");

const $errNome = document.getElementById("err-nome");
const $errEmail = document.getElementById("err-email");
const $errSenha = document.getElementById("err-senha");

const $ok = document.getElementById("ok-msg");
const $res = document.getElementById("resultado");
const $outNome = document.getElementById("out-nome");
const $outEmail = document.getElementById("out-email");
const $outSenha = document.getElementById("out-senha");

const $usarLS = document.getElementById("usarLocalStorage");

function isEmail(v){ return /\S+@\S+\.\S+/.test(v); }

function showErr($input, $err, ok){
  if (ok) {
    $input.classList.remove("input-error");
    $err.hidden = true;
  } else {
    $input.classList.add("input-error");
    $err.hidden = false;
  }
}

$form?.addEventListener("submit", (e) => {
  e.preventDefault();
  $ok.hidden = true;
  $res.hidden = true;

  const nome = $nome.value.trim();
  const email = $email.value.trim();
  const senha = $senha.value;

  const vNome = nome.length > 0;
  const vEmail = isEmail(email);
  const vSenha = (senha?.length || 0) >= 6;

  showErr($nome, $errNome, vNome);
  showErr($email, $errEmail, vEmail);
  showErr($senha, $errSenha, vSenha);

  if (!(vNome && vEmail && vSenha)) return;

  $outNome.textContent = nome;
  $outEmail.textContent = email;
  $outSenha.textContent = `${"*".repeat(Math.min(12, senha.length))} (${senha.length} chars)`;
  $res.hidden = false;
  $ok.hidden = false;

  if ($usarLS?.checked) {
    // "Hash" simples (didático – NÃO usar em produção):
    const senhaHash = btoa(unescape(encodeURIComponent(senha))); // base64
    const payload = { nome, email, senhaHash, createdAt: new Date().toISOString() };
    localStorage.setItem(ID_LS, JSON.stringify(payload));
  }

  // Limpar (se quiser manter, comente abaixo)
  // $form.reset();
});

// Mostrar na interface se já existe algo no LS
try {
  const raw = localStorage.getItem(ID_LS);
  if (raw) {
    const u = JSON.parse(raw);
    const hint = document.createElement("p");
    hint.className = "helper";
    hint.innerHTML = `Um cadastro já existe no navegador para <strong>${u.email}</strong>. Você pode sobrescrever ao enviar novamente.`;
    $form.insertAdjacentElement("afterend", hint);
  }
} catch {}
