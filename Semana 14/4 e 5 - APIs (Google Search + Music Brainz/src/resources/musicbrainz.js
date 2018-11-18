// http://musicbrainz.org/ws/2/artist/?query=demi%20lovato&fmt=json

import axios from 'axios'

const contentInfos = document.getElementById(`content`)

function mbArtistsSearch(search) {
    return new Promise(function (resolve, reject) {
        axios.get(`http://musicbrainz.org/ws/2/artist/?query=${search}&fmt=json`)
            .then(response => {
                const searchResult = response.data.artists[0]

                if (searchResult) {
                    resolve({
                        name: searchResult.name,
                        life: `${searchResult['life-span'].begin} - ${searchResult['life-span'].ended ? searchResult['life-span'].ended : 'present'}`,
                        area: searchResult.area ? searchResult.area.name : ``
                    })
                } else {
                    reject(`Nenhum resultado encontrado!`)
                }
            })

            .catch(error => {
                reject(error)
            })
    })
}


export default mbArtistsSearch