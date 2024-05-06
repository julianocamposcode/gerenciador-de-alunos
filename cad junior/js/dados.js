const array = JSON.parse(localStorage.getItem("dados")) || [];
    const lista = document.querySelector(".lista");

    array.forEach((dado) => {
      const li = document.createElement("li");
      li.classList.add("item");

      const p = document.createElement("p");
      const nomeText = document.createElement("p");

      p.innerHTML = "Email : " + dado.email;
      nomeText.innerHTML = "Nome : " + dado.nome;

      p.classList = "p";
      nomeText.classList = "nometext";

      let div = document.createElement("div");
      div.classList = "acoes";

      let edit = document.createElement("img");
      edit.src = "https://cdn-user-icons.flaticon.com/68671/68671661/1714951861162.svg?token=exp=1714952761~hmac=69dc119d0325cf3cc549b31eb0092abc";
      edit.classList = "edit";

      edit.addEventListener("click", () => {
        localStorage.setItem("editar_id", dado.id);
        window.location.href = "edita_junior.html";
      });

      let span = document.createElement("span");

      span.innerText = "🗑️";

      li.dataset.id = dado.id;

      span.addEventListener("click", () => {
        deletaAluno(li, dado.id);
      });

      let divNomes = document.createElement("div");
      divNomes.classList = "divNomes";

      div.appendChild(span);
      div.appendChild(edit);
      divNomes.appendChild(nomeText);
      divNomes.appendChild(p);

      lista.appendChild(li);
      li.appendChild(divNomes);
      li.appendChild(div);
    });

    function limpar() {
      localStorage.clear();
      lista.remove();
    }

    function deletaAluno(aluno, id) {
      array.splice(
        array.findIndex((elemento) => elemento.id === id),
        1
      );

      localStorage.setItem("dados", JSON.stringify(array));
      aluno.remove();
    }

    let ul = document.querySelector("ul");
    let buto = document.querySelector(".limpar");

    if (ul.children.length == 0) {
      buto.remove()
    }