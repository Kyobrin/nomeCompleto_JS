function clicar(){
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let completo = document.getElementById ('completo');
    let catalogo = document.getElementById ('catalogo');
    completo.innerText = `Nome Completo:${nome} ${sobrenome}`;
    catalogo.innerText = `Nome Catálogo:${sobrenome.toUpperCase()}, ${nome}`;

}