const inputNome = document.getElementById(`contatoInputNome`)
const inputEmail = document.getElementById(`contatoInputEmail`)
const inputPhone = document.getElementById(`contatoInputPhone`)

const inputMsg = document.getElementById(`contatoInputMessage`)

const clickButton = document.querySelector(`.contato__button`)

clickButton.addEventListener(`click`, function (event) {
    event.preventDefault()

    if (
        inputNome.value === undefined ||
        inputNome.value === null ||
        inputNome.value === `` ||
        inputNome.value === ` `) {
        inputNome.focus()
        return false
    }

    else if (
        inputEmail.value === undefined ||
        inputEmail.value === null ||
        inputEmail.value === `` ||
        inputEmail.value === ` `) {
        inputEmail.focus()
        return false
    }

    else if (
        inputPhone.value === undefined ||
        inputPhone.value === null ||
        inputPhone.value === `` ||
        inputPhone.value === ` `) {
        inputPhone.focus()
        return false
    }
    else if (
        inputMsg.value === undefined ||
        inputMsg.value === null ||
        inputMsg.value === `` ||
        inputMsg.value === ` `) {
        inputMsg.focus()
        return false
    }

    alert(`Todos os dados foram inseridos corretamente!`)

    return true
})