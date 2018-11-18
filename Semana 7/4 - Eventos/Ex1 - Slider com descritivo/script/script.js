const navLinks = document.querySelector(`.gallery__nav`)

for (let i = 0; i < navLinks.children.length; i++){
    navLinks.children[i].addEventListener(`click`, function(event){
        event.preventDefault()

        const img = this.dataset.image
     
        const description = this.dataset.title
        
        document.querySelector(`.gallery__image`).src = img
        document.querySelector(`.gallery__caption`).innerHTML = description
    })
}