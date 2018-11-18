//<input> : new tweet
const tweetInput = document.getElementById(`tweetComposerInput`)

//<div> : timeline
const timeline = document.querySelector(`.tweets-timeline`)

//<div> : timeline - header
const timelineHeader = document.querySelector(`.tweets-timeline__header`)

//<div> : timeline - footer
const timelineFooter = document.querySelector(`.tweets-timeline__footer`)

//<button>
const tweetButton = document.querySelector(`.tweet-composer__button`)

tweetButton.addEventListener(`click`, function (event) {
    event.preventDefault()

    if (
        tweetInput.value === undefined ||
        tweetInput.value === null ||
        tweetInput.value === `` ||
        tweetInput.value === ` `) {
        return false
    }


    const timelineBox = document.createElement(`div`)
    timelineBox.className = `tweets-timeline__box`


    const newTweetHeader = document.createElement(`div`)
    newTweetHeader.className = `tweets-timeline__header`


    const newTweetHeader_name = document.createElement(`span`)
    newTweetHeader_name.className = `tweets-timeline__name`
    const newTweetHeader_name_textNode = document.createTextNode(`thaylla `)
    newTweetHeader_name.appendChild(newTweetHeader_name_textNode)


    const newTweetHeader_username = document.createElement(`span`)
    newTweetHeader_username.className = `tweets-timeline__username`
    const newTweetHeader_username_textNode = document.createTextNode(` @thaychristine_ `)
    newTweetHeader_username.appendChild(newTweetHeader_username_textNode)


    const newTweetHeader_date = document.createElement(`span`)
    newTweetHeader_date.className = `tweets-timeline__date`
    const newTweetHeader_date_textNode = document.createTextNode(` - data de hoje `)
    newTweetHeader_date.appendChild(newTweetHeader_date_textNode)


    // const tweetInput = document.getElementById(`tweetComposerInput`).value
    // const tweetNodeInput = document.createTextNode(tweetInput)
    // timeline.appendChild(tweetNodeInput)


    const newTweet = document.createElement(`p`)
    newTweet.className = `tweets-timeline__tweet`
    newTweet.innerText = tweetInput.value
    // timelineNewTweet.innerHTML = `<p class="tweets-timeline__tweet"> ${tweetInput.value} </p>` 


    const newTweetFooter = document.createElement(`div`)
    newTweetFooter.className = `tweets-timeline__footer`


    // newTweetFooter.innerHTML = `Excluir`
    const newTweetFooter_btDelete = document.createElement(`button`)
    newTweetFooter_btDelete.className = `tweets-timeline__delete-button`
    const newTweetFooter_btDelete_textNode = document.createTextNode(`Excluir`)
    newTweetFooter_btDelete.appendChild(newTweetFooter_btDelete_textNode)


    timelineBox.appendChild(newTweetHeader)

    newTweetHeader.appendChild(newTweetHeader_name)
    newTweetHeader.appendChild(newTweetHeader_username)
    newTweetHeader.appendChild(newTweetHeader_date)

    timelineBox.appendChild(newTweet)

    timelineBox.appendChild(newTweetFooter)
    newTweetFooter.appendChild(newTweetFooter_btDelete)

    timeline.insertBefore(timelineBox, timeline.childNodes[0])

    tweetInput.value = ``


    newTweetFooter_btDelete.addEventListener(`click`, function (event) {
        event.preventDefault()

        timelineBox.remove()
    })
})