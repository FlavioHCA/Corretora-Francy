function enviar_dados() {
    let nome = document.querySelector('.nome').value;
    let email = document.querySelector('.email').value;
    let bairro = document.querySelector('.bairro').value;
    let telefone = document.querySelector('.telefone').value;
    let tipo_imovel = document.querySelector('.tipo_imovel').value;
    let tipo_renda = document.querySelector('.tipo_renda').value;
    let renda = document.querySelector('.renda').value;

    if (nome == "") {
        alert("Campo 'Nome' vazio")

    } else if (email == "") {
        alert("Campo 'E-mail' vazio")
    } else if (bairro == "") {
        alert("Campo 'Bairro de preferencia' vazio")
    } else if (telefone == "") {
        alert("Campo 'Numero de contato' vazio")
    } else {

        let url = "https://web.whatsapp.com/send?phone=5575992063600&text= _*Olá Francy, quero realizar meu sonho da casa propria*_ %0A%0A Meu nome: %0A *"
            + nome
            + "* %0A%0A Meu e-mail: %0A *"
            + email
            + "* %0A%0A Meu bairro de preferencia: %0A *"
            + bairro
            + "* %0A%0A Melhor numero para contato: %0A *"
            + telefone
            + "* %0A%0A Tipo de imovel de preferencia? %0A *"
            + tipo_imovel + "* "
            + "* %0A%0A Qual seu tipo de renda ? %0A *"
            + tipo_renda + "* "
            + "* %0A%0A Qual sua renda bruta mensal ? %0A *"
            + renda + "* ";

        window.open(url);
    }
}

