console.log(response.data.artists[0].name)
console.log(response.data.artists[0]['life-span'].begin)
console.log(response.data.artists[0]['life-span'].ended)

const nameArtist = document.createElement(`h1`)
nameArtist.className = `name`

const carrer = document.createElement(`div`)
carrer.className = `carrer`
const start = document.createElement(`h3`)
start.className = `start`
const end = document.createElement(`h3`)
end.className = `end`

start.textContent = response.data.artists[0]['life-span'].begin
end.textContent = response.data.artists[0]['life-span'].ended

carrer.style.flex = `flex`
carrer.style.justifyContent = `flex-start`

carrer.appendChild(start)
carrer.appendChild(end)

const location = document.createElement(`p`)
location.className = `location`

contentInfos.appendChild(nameArtist)
contentInfos.appendChild(carrer)
contentInfos.appendChild(location)

if (end.textContent === null) {
    //mudar para present    
}
