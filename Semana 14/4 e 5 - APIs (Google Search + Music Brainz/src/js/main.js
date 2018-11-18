import '../styles/main.scss'
import credentials from './credentials'

import googleImageSearch from '../resources/google'
import mbArtistsSearch from '../resources/musicbrainz'


// Manipulação do DOM
const form = document.querySelector(`#search form`)
const inputArtist = document.getElementById(`artist`)

const contentInfos = document.getElementById(`content`)
const bgArtist = document.getElementById(`bg`)


// Evento de submit
form.addEventListener(`submit`, event => {
    event.preventDefault()

    contentInfos.innerHTML = `<p>Carregando...</p>`
    contentInfos.style.height = `auto`

    const query = inputArtist.value
    bgArtist.style.opacity = 0


    //Função: mbArtistsSearch
    mbArtistsSearch(query)
        .then(mb_data => {
            //Função: googleImageSearch
            googleImageSearch(mb_data.name)
                .then(gg_data => {
                    bgArtist.src = gg_data
                    bgArtist.onload = function () {
                        bgArtist.style.opacity = 1

                        contentInfos.innerHTML = ``
                        contentInfos.style.height = 0

                        const nameArtist = document.createElement(`h1`)
                        nameArtist.textContent = mb_data.name

                        const lifeArtist = document.createElement(`h3`)
                        lifeArtist.textContent = mb_data.life

                        const locationArtist = document.createElement(`p`)
                        locationArtist.textContent = mb_data.area

                        contentInfos.appendChild(nameArtist)
                        contentInfos.appendChild(lifeArtist)
                        contentInfos.appendChild(locationArtist)

                        contentInfos.style.height = nameArtist.clientHeight + lifeArtist.clientHeight + locationArtist.clientHeight + 80 + `px`

                        inputArtist.value = ``
                    }
                })

                .catch(error => {
                    console.error(`googleSearchCustom:`, error)
                    const errorMsg = error === `Nenhum resultado encontrado!` ? error : `Erro de conexão`
                    contentInfos.innerHTML = `<p>${errorMsg}</p>`
                })
        })

        .catch(error => {
            console.error(`musicBrainz: `, error)
            const errorMsg = error === `Nenhum resultado encontrado!` ? error : `Erro de conexão`
            contentInfos.innerHTML = `<p>${errorMsg}</p>`
        })
})


