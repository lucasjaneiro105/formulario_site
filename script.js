function Enviar() {

    var nome = document.getElementById("nome");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
function verificaSenha() {
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirma-senha").value;
    if (senha !== confirmaSenha) {
      alert("As senhas não correspondem!");
      return false;
    }
    return true;}
