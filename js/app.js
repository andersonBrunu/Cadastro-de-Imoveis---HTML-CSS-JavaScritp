class App {
    addPropriedade() {
        event.preventDefault()
        let tipo = document.querySelector("select[name='tipo']").value;
        let area = document.querySelector("input[name='area']").value;
        let alugado = document.querySelector("input[name='alugado']").checked;
        let propriedade = new Propriedade(tipo, area, alugado);
        this.addOnPropriedade(propriedade);
        this.clean();
    }

    addOnPropriedade(propriedade) {
        let li = document.createElement("li");
        let propriedadeInfo = "Tipo: " + propriedade.tipo + "(Area: " + propriedade.area + "m²)" + " ";
        if (propriedade.alugado) {
            let marcaAlugado = this.criarMarcaAlugado();
            li.appendChild(marcaAlugado);
        }
        li.innerHTML += propriedadeInfo;
        let buttonRemove = this.criarButaoRemover();
        li.appendChild(buttonRemove);
        document.getElementById("propriedades").appendChild(li);
    }

    criarMarcaAlugado() {
        let mark = document.createElement("span");
        mark.style.color = "white";
        mark.style.backgroundColor = "blue";
        mark.style.fontSize = "18px"
        mark.innerText = "ALUGADO ";
        return mark;
    }

    criarButaoRemover() {
        let butao = document.createElement("button");
        butao.style.height = "20px";
        butao.style.width = "100px";
        butao.style.fontSize = "18px";
        butao.style.borderRadius = "5px";
        butao.style.border = "1px"
        butao.setAttribute("onclick", "app.remover()");
        butao.innerText = "  remove";
        return butao;
    }
    remover() {
        let liToRemove = event.target.parentNode
        document.getElementById("propriedades").removeChild(liToRemove)
    }

    clean() {
        let area = document.querySelector("input[name='area']").value = "";
        let retend = document.querySelector("input[name='alugado']").checked = false;
    }
}