'use strict'

// Consumindo a API

function nasaRequest() {
    // fazendo o request da url
    let xmlhttp = new XMLHttpRequest();

    // No caso onreadystatechange, especificamos o que acontecerá quando a resposta do servidor está pronto para ser processado.
    xmlhttp.onreadystatechange = function () {
        // O método status retorna um código de status numérico da resposta do XMLHttpRequest. 200 denota uma solicitação bem-sucedida.
        // O método readyState retorna o estado em que um cliente XMLHttpRequest está. 4 indica que a operação foi concluída.
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            // Pegando dados de cada json(array) pelo seu tipo
            let date = data["date"];
            let explanation = data["explanation"];
            let media_type = data["media_type"];
            let title = data["title"];
            let url = data["url"];

            let imageType = ` <div class="bg-image">
                            <img id="wrapper-image" src="" class="w-100" alt="">
                          </div>
                          `;

            let videoType = ` <div class="ratio ratio-16x9">
                            <iframe id="wrapper-video" 
                            src=""
                            title="Youtube video" allowfullscreen"></iframe>
                          </div>
                        `;

            // chamando e colocando-os nas divs
            document.getElementById("wrapper-title").innerHTML = title;
            document.getElementById("wrapper-explanation").innerHTML = explanation;

            // validando se for video ou imagem, adicionando eles em um container novo
            if (media_type === "video") {
                document.getElementById("wrapper-media").innerHTML = videoType;
                document.getElementById("wrapper-video").src = url;
            } else {
                document.getElementById("wrapper-media").innerHTML = imageType;
                document.getElementById("wrapper-image").src = url;
            }
        }
    }

    // Colocando a url e a chave em variáveis e atribuindo a uma variável para consulta completa
    let data = document.getElementById("date").value;
    let consultaUrl = "https://api.nasa.gov/planetary/apod?";
    let consultaChave = "api_key=bqBIWfjCzYO6ZcubPhT7ICbgmhaX4PgBjuC3rCS7&";
    let consultaData = "date=" + data + "&";

    let consultaCompleta = consultaUrl + consultaChave + consultaData;

    xmlhttp.open("GET", consultaCompleta, true);
    xmlhttp.send();
}

const descobrir = document.getElementById("botao-acessar");
descobrir.addEventListener('click', (e) => {
    nasaRequest();
});

nasaRequest().onload;




