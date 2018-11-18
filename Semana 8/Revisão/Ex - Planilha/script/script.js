const inputName = document.getElementById(`feedbackInputName`)
const inputCity = document.getElementById(`feedbackInputCity`)
const inputComment = document.getElementById(`feedbackInputComment`)

const answersTable = document.querySelector(`.respostas__table`)
const answersTableHeader = document.querySelector(`.respostas__header`)

const feedBut = document.querySelector(`.feedback__button`)

feedBut.addEventListener(`click`, function (event) {
    event.preventDefault()

    const answersTableBody = document.createElement(`tbody`)
    answersTableBody.className = `respostas__body`

    const answersTableBody_row = document.createElement(`tr`)

    const answersTableBody_name = document.createElement(`td`)
    const answersTableBody_city = document.createElement(`td`)
    const answersTableBody_com = document.createElement(`td`)


    const inputName_textNode = document.createTextNode(inputName.value)
    const inputCity_textNode = document.createTextNode(inputCity.value)
    const inputComment_textNode = document.createTextNode(inputComment.value)


    answersTableBody_name.appendChild(inputName_textNode)
    answersTableBody_city.appendChild(inputCity_textNode)
    answersTableBody_com.appendChild(inputComment_textNode)

    answersTableBody_row.appendChild(answersTableBody_name)
    answersTableBody_row.appendChild(answersTableBody_city)
    answersTableBody_row.appendChild(answersTableBody_com)

    answersTableBody.appendChild(answersTableBody_row)

    answersTable.appendChild(answersTableBody)

    inputName.value = ``
    inputCity.value = ``
    inputComment.value = ``
})