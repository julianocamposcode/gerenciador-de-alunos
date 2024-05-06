const array = JSON.parse(localStorage.getItem("dados")) || [];
const form = document.querySelector("form");
const lista = document.querySelector(".lista");
const linha = document.querySelector("li");


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let nome = event.target.elements["nome"].value;
    let email = event.target.elements["email"].value;


    let existe = array.find(elemento => elemento.nome === nome)
    if (existe) {
        alert('Esse aluno já está cadastrado!')
    } else {
        const dados = {
            nome: nome,
            email: email,
        };

        dados.id = array[array.length - 1] ? (array[array.length - 1]).id + 1 : 0


        array.push(dados);

        localStorage.setItem("dados", JSON.stringify(array));
        window.location.href = 'dados.html'
    }

    event.target.elements["nome"].value = ''
    event.target.elements["email"].value = ''

});

