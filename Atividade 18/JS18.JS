function validar(event) {
    var form = document.forms['nomeform'];
    var nome = form.elements['nome'].value;
    var email = form.elements['email'].value;
    var comentario = form.elements['comentario'].value;
    var pesquisaSim = form.elements['pesquisaSim'].checked;
    var pesquisaNao = form.elements['pesquisaNao'].checked;

    if (nome.length < 10) {
        alert('O nome deve ter pelo menos 10 caracteres.');
        event.preventDefault();
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('O email deve conter os caracteres "@" e "."');
        event.preventDefault();
        return false;
    }

    if (comentario.length < 20) {
        alert('O comentário deve ter pelo menos 20 caracteres.');
        event.preventDefault();
        return false;
    }

    if (!pesquisaSim && !pesquisaNao) {
        alert('Você deve selecionar uma opção na pesquisa.');
        event.preventDefault();
        return false;
    } else {
        alert(pesquisaSim ? 'Que bom que você voltou a visitar esta página!' : 'Volte sempre à esta página!');
    }

    return true;
}