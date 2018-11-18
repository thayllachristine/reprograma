/*1 - Pegar todos os inputs
2 -  Verificar se os inputs estão vazios ou undefineds
3 - Verificar se os emails são os mesmos
4 - Verificar se a senha é a mesma
5 - Senha tem que ter mais que 7 digitos
6 - O fundo muda de cor de acordo com a área
    front end azul
    back verde
    ux rosa
    ui laranja
7 - dependando do nível escreve no console
    junior: 0 - 2 anos de experiência;
    pleno: 2 - 5 anos de experiência;
    senior 5+ anos de experiência;
8 - Se news não estiver checkado exibir um alerta escrito: É uma pena que você não deseja receber nosso conteúdo exclusivo. */

// <input>
const inputNome = document.getElementById(`cadastroInputNome`)
const inputEmail = document.getElementById(`cadastroInputEmail`)
const inputEmailConfirm = document.getElementById(`cadastroInputEmailConfirm`)
const inputPassword = document.getElementById(`cadastroInputPassword`)
const inputPasswordConfirm = document.getElementById(`cadastroInputPasswordConfirm`)
const inputPhone = document.getElementById(`cadastroInputPhone`)

// <select>
const selectArea = document.getElementById(`cadastroInputArea`)
const optionSelect = selectArea.options[selectArea.selectedIndex]

// <input type="radio">
const selectLevel = document.getElementsByName(`level`)

// <input type="checkbox">
const checkNews = document.getElementById(`cadastroInputNews`)

// <button>
const clickButton = document.querySelector(`.cadastro__button`)

//Evento ao clicar no botão :
clickButton.addEventListener(`click`, function (event) {
    event.preventDefault()

    let levelSeniority
    for (i = 0; i < selectLevel.length; i++) {
        if (selectLevel[i].checked) {
            levelSeniority = selectLevel[i]
        }
    }


    if (
        inputNome.value === undefined ||
        inputNome.value === null ||
        inputNome.value === `` ||
        inputNome.value === ` `) {
        inputNome.focus()
        return false

    } else if (
        inputEmail.value === undefined ||
        inputEmail.value === null ||
        inputEmail.value === `` ||
        inputEmail.value === ` `) {
        inputEmail.focus()
        return false

    } else if (
        inputEmail.value !== inputEmailConfirm.value) {
        inputEmailConfirm.focus()
        alert(`O e-mail não confere!`)

        return false

    } else if (
        inputPassword.value === undefined ||
        inputPassword.value === null ||
        inputPassword.value === `` ||
        inputPassword.value === ` `) {
        inputPassword.focus()
        return false

    } else if (
        inputPassword.value.length < 7) {
        alert(`A senha precisa ter mais de 7 caracteres!`)


    } else if (
        inputPassword.value !== inputPasswordConfirm.value) {
        inputPasswordConfirm.focus()
        return false

    } else if (
        inputPhone.value === undefined ||
        inputPhone.value === null ||
        inputPhone.value === `` ||
        inputPhone.value === ` `) {
        inputPhone.focus()
        return false
    }


    if (
        levelSeniority.value === `Junior`) {
        console.log(`Junior: 0 - 2 anos de experiência`)
    } else if (
        levelSeniority.value === `Pleno`) {
        console.log(`Pleno: 2 - 5 anos de experiência`)
    } else {
        console.log(`Senior : +5 anos de experiência`)
    }


    if (
        cadastroInputNews.checked === false) {
        alert(`Tem certeza que não deseja ssinar a newsletter?`)
    }


    document.querySelector(`body`).style.backgroundColor = `#fff`
    this.closest(`form`).submit()

})


//Evento para selecionar uma opção do radio-button :
selectArea.addEventListener(`change`, function () {
    if (
        selectArea.selectedIndex === 0) {
        document.querySelector(`body`).style.backgroundColor = `#0D94FB` //azul

    } else if (
        selectArea.selectedIndex === 1) {
        document.querySelector(`body`).style.backgroundColor = `#59FB0D` //verde

    } else if (
        selectArea.selectedIndex === 2) {
        document.querySelector(`body`).style.backgroundColor = `#FB0DBF` //rosa             

    } else if (
        selectArea.selectedIndex === 3) {
        document.querySelector(`body`).style.backgroundColor = `#FBA40D` //laranja
    }
})

//Evento para não copiar o input da confirmação do e-mail
inputEmailConfirm.addEventListener(`paste`, function (event) {
    event.preventDefault()
    return false
})


//Evento para não copiar o input da confirmação de senha
inputPasswordConfirm.addEventListener(`paste`, function (event) {
    event.preventDefault()
    return false
})