const selectArea = document.getElementById(`selectInputArea`)
const deleteButton = document.querySelector(`.select__button`) 

deleteButton.addEventListener(`click`, function(event){
    event.preventDefault()
    selectArea.remove(selectArea.selectedIndex) //remove selection option
})

// console.log(selectArea.selectedIndex)
// console.log(selectArea.options[selectArea.selectedIndex])