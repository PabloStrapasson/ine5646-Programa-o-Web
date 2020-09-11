var formHobbie = document.getElementById("create-hobbie");
var formQuestion = document.getElementById("create-question");

formHobbie.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const hobbie = document.getElementById('hobbie').value;
    // console.log(hobbie);
    if(hobbie){    
        addHobbie(hobbie);
    }
});

formQuestion.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const question = document.getElementById('question').value;
    // console.log(question);
    if(question){
        addQuestion(question);
    }
    
})

function addHobbie(hobbieElem){
    var listaHob = document.getElementById("listaHobbies");
    var ulHobbies = document.createElement("UL");

    var liHobbie = document.createElement("LI");
    liHobbie.textContent = `${hobbieElem}`;
    liHobbie.className = "lista-hobbies";
    ulHobbies.appendChild(liHobbie);
    
    listaHob.appendChild(ulHobbies);
}

function addQuestion(question){
    var listaDuv = document.getElementById("listaDuvidas");
    var ulDuvidas = document.createElement("UL");

    var liDuvida = document.createElement("LI");
    liDuvida.textContent = `${question}`;
    liDuvida.className = "lista-duvidas";
    ulDuvidas.appendChild(liDuvida);
    
    listaDuv.appendChild(ulDuvidas);
}


