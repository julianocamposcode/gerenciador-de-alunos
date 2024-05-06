const form = document.querySelector('form')
const array = JSON.parse(localStorage.getItem("dados")) || [];
const idAluno = JSON.parse(localStorage.getItem("editar_id"));

alunoEditar = array.find(elemento => elemento.id === idAluno)

document.getElementById('nome').value = alunoEditar.nome
document.getElementById('email').value = alunoEditar.email

form.addEventListener('submit', (event) => {
    let existe = array.find(elemento => elemento.nome === event.target.elements.nome.value)
    if (existe) {
        alert('Esse Aluno já está cadastrado!')
    } else {
        alunoEditar.nome = event.target.elements.nome.value
        alunoEditar.email = event.target.elements.email.value

        localStorage.setItem("dados", JSON.stringify(array));
    }
})

