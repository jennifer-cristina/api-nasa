'use strict'

// Buscando os dados da api
const buscar = async () => {
    const data = document.getElementById("date").value;
    const consultaUrl = "https://api.nasa.gov/planetary/apod?";
    const consultaChave = "api_key=bqBIWfjCzYO6ZcubPhT7ICbgmhaX4PgBjuC3rCS7&";
    const consultaData = "date=" + data + "&";

    const consultaCompleta = consultaUrl + consultaChave + consultaData;
    console.log(consultaCompleta)

    const resposta = await fetch(consultaCompleta);

    const dados = await resposta.json();

    console.log(resposta)

    return dados;
}

// Carregando os dados da api e colocando no container resultado
const carregarDados = async () => {

    const container = document.querySelector('.container-resultado')
    const dadosBusca = await buscar()
    const card = criarCard(dadosBusca)
    console.log(dadosBusca)
    container.replaceChildren(card)

}

// Criando o card
const criarCard = (data) => {

    const containerMedia = definirTipoMedia(data)
    const content = document.createElement('div')
    content.classList.add('content')
    content.innerHTML = `

                <div class="container-imagem">

                    <section id="wrapper-media" class="imagem">
                    ${containerMedia}
                    </section>

                </div>

                <div class="container-informacao-imagem">

                    <h5 id="wrapper-title">${data.title}</h5>
                    <p class="mb-2 text-muted" ><span id="wrapper-explanation">${data.explanation}</span> </p>

                </div>
    `

    return content
}

// validar qual chegará, se for imagem ou video
const definirTipoMedia = (data) => {

    let containerMedia = ""
    // validando se for video ou imagem, adicionando eles em um container novo
    if (data.media_type === "video") {
        containerMedia = `
        <div class="ratio ratio-16x9">
                            <iframe id="wrapper-video" 
                            src="${data.url}"
                            title="Youtube video" allowfullscreen"></iframe>
                          </div>
        `
    } else {
        containerMedia = 
        `<div class="bg-image">
                            <img id="wrapper-image" src="${data.url}" class="w-100" alt="">
                          </div>
                          `
    }

    return containerMedia
}

const descobrir = document.getElementById("botao-acessar");
descobrir.addEventListener('click', carregarDados );