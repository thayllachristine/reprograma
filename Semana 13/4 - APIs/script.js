//Declaração da variáveis já declaradas no HTML
const inputText = document.getElementById(`inputText`)
const resultVideo = document.getElementById(`resultVideo`)

//Adição de evento para blur
inputText.addEventListener(`keydown`, function () {
    //Inserção de GIF de carregamento
    const imgLoading 

    //Variáveis utilizadas na URL da função get_data
    const partValue = `snippet`
    const typeValue = `video`
    const qValue = this.value
    //https://console.developers.google.com/cloud-resource-manager

    get_data(`https://www.googleapis.com/youtube/v3/search?part=${partValue}&key=${keyValue}&type=${typeValue}&q=${qValue}`)

        //Sucesso na requisição
        .then(function (data) {
            data = JSON.parse(data)
            // console.log("Funcionou!")

            //Para remoção de resultados já encontrados
            while (resultVideo.firstChild) {
                resultVideo.removeChild(resultVideo.firstChild)
            }

            //Se o tamanho do JSON
            if (data.items.length > 0) {
                //Loop do JSON da API
                for (const item of data.items) {
                    //Criação de novos elementos no HTML
                    const linkVideo = document.createElement(`a`)
                    linkVideo.className = `link`
                    const titleVideo = document.createElement(`h1`)
                    titleVideo.className = `title`
                    const descriptionVideo = document.createElement(`p`)
                    descriptionVideo.className = `description`

                    //Inserção de valores nos elementos/variáveis criados
                    linkVideo.href = `https://www.youtube.com/watch?v=${item.id.videoId}`
                    titleVideo.textContent = item.snippet.title
                    descriptionVideo.textContent = item.snippet.description

                    linkVideo.appendChild(titleVideo)
                    linkVideo.appendChild(descriptionVideo)
                    resultVideo.appendChild(linkVideo)
                }
            } else {
                resultVideo.innerHTML = `
                <p> Nenhum vídeo foi encontrado </p>`
            }
        })

        //Problema na requisição
        .catch(function (error) {
            //Declaração da variável para remoção do display
            const doYourSearch = document.getElementById(`doYourSearch`)
            doYourSearch.style.display = `none`

            //Declaração da variável com mensagem de erro
            const errorMsg = document.createElement(`p`)
            errorMsg.className = `errorMsg`
            errorMsg.textContent = `Error 404: Bad Request`
            errorMsg.style.color = `red`

            //Declaração da variável com mensagem de erro + imagem
            const errorImg = document.createElement(`img`)
            errorImg.src = `https://httpstatusdogs.com/img/400.jpg`
            errorImg.style.width = `400px`

            resultVideo.style.display = `flex`
            resultVideo.style.flexDirection = `column`
            resultVideo.style.alignItems = `center`

            resultVideo.appendChild(errorMsg)
            resultVideo.appendChild(errorImg)
        })
})