// const art = document.querySelector(`.article`)
// const artCat = document.querySelector(`.article__category`)
// const artTitle = document.querySelector(`.article__title`)
// const artSubtitle = document.querySelector(`.article__subtitle`)

const artLink = document.querySelector(`#externo`)
const attButton = document.querySelector(`.button-attributes`)

/*
attButton.addEventListener(`click`, function(event){
    event.preventDefault()
    
    console.log(`AAAAAaaaaa`)
        console.log(artCat)
    console.log(artTitle)
    console.log(artSubtitle)
})
*/

const all = document.querySelector(`.wrapper`)


function getAttributes() {
    console.log("AAAAAAAAAAA")
    console.log(artLink.attributes)

    const divAtt = document.createElement(`div`)
    divAtt.className = `attributes`
    all.appendChild(divAtt)

    for (i = 0; i < artLink.attributes.length; i++) {
        console.log(i)
        console.log(artLink.attributes[i].name, artLink.attributes[i].value)

        const spanAtt = document.createElement(`span`)
        spanAtt.className = `attributes__infos`
        divAtt.appendChild(spanAtt)

        let spanAtt_textNode = document.createTextNode(`${artLink.attributes[i].name} :  ${artLink.attributes[i].value} `)
        spanAtt.appendChild(spanAtt_textNode)
    }
}