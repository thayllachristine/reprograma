const tweetInput = document.getElementById(`tweetComposerInput`) //<input> : new tweet
const timeline = document.querySelector(`.tweets-timeline`) //<div> : timeline
const timelineHeader = document.querySelector(`.tweets-timeline__header`) //<div> : timeline-header
const timelineFooter = document.querySelector(`.tweets-timeline__footer`) //<div> : timeline-footer

const tweetButton = document.querySelector(`.tweet-composer__button`) //<button>

//event : click button to add a new tweet
tweetButton.addEventListener(`click`, function(event){
    event.preventDefault()

    //conditional : new tweet value
    if (
        tweetInput.value === undefined ||
        tweetInput.value === null || 
        tweetInput.value === `` ||
        tweetInput.value === ` ` ) {
            return false
    }

    //new tweet date
    const newTweetDate = new Date()
    const newTweetDate_month = newTweetDate.toLocaleString(`pt-br`, { month: `short`})
    const newTweetDate_day = newTweetDate.getDate()


    //create div : timeline
    const timelineBox = document.createElement(`div`)
    timelineBox.className = `tweets-timeline__box`


    //create div : timeline-header
    const newTweetHeader = document.createElement (`div`)
    newTweetHeader.className = `tweets-timeline__header`
    
    const newTweetHeader_name = document.createElement (`span`)
    newTweetHeader_name.className = `tweets-timeline__name`
    const newTweetHeader_name_textNode = document.createTextNode(`thaylla `)
    newTweetHeader_name.appendChild(newTweetHeader_name_textNode)

    const newTweetHeader_username = document.createElement (`span`)
    newTweetHeader_username.className = `tweets-timeline__username`
    const newTweetHeader_username_textNode = document.createTextNode(` @thaychristine_ · `)
    newTweetHeader_username.appendChild(newTweetHeader_username_textNode)

    const newTweetHeader_date = document.createElement (`span`)
    newTweetHeader_date.className = `tweets-timeline__date`
    // const newTweetHeader_date_textNode = document.createTextNode(` - data de hoje `)
    const newTweetHeader_date_textNode = document.createTextNode(`${newTweetDate_day} de ${newTweetDate_month}`)
    newTweetHeader_date.appendChild(newTweetHeader_date_textNode)


    //create p : new tweet
    const newTweet = document.createElement(`p`)
    newTweet.className = `tweets-timeline__tweet`
    newTweet.innerText = tweetInput.value
    // timelineNewTweet.innerHTML = `<p class="tweets-timeline__tweet"> ${tweetInput.value} </p>` 
     

    //create div : timeline-footer
    const newTweetFooter = document.createElement(`div`)
    newTweetFooter.className = `tweets-timeline__footer`

    //create button : timeline-footer delete-button
    const newTweetFooter_btDelete = document.createElement(`button`)
    newTweetFooter_btDelete.className = `tweets-timeline__delete-button`
    const newTweetFooter_btDelete_textNode = document.createTextNode(`Excluir`)
    newTweetFooter_btDelete.appendChild(newTweetFooter_btDelete_textNode)
    // newTweetFooter.innerHTML = `Excluir`
    

    //appendChilds
    timelineBox.appendChild(newTweetHeader)

    newTweetHeader.appendChild(newTweetHeader_name)
    newTweetHeader.appendChild(newTweetHeader_username)
    newTweetHeader.appendChild(newTweetHeader_date)

    timelineBox.appendChild(newTweet)

    timelineBox.appendChild(newTweetFooter)
    newTweetFooter.appendChild(newTweetFooter_btDelete)

    
    //insertBefore : add all before timeline
    timeline.insertBefore(timelineBox, timeline.childNodes[0])


    //before add new tweet, the text area return empty value
    tweetInput.value = ``


    //return count value to 280
    const tweetInputCount = document.getElementById(`tweetComposerCounter`)
        tweetInputCount.innerHTML = 280
    // console.log(tweetInputCount.value)
    

    //to remove a tweet before click button "Excluir"
    newTweetFooter_btDelete.addEventListener(`click`, function(event){
        event.preventDefault()
        timelineBox.remove()
    })
})


//event : count characteres in keyboard
tweetInput.addEventListener(`keyup`, function(){
    const tweetInputCount = document.getElementById(`tweetComposerCounter`)
    const tweetInputBox = this
    const tweetInputMaxLength = 280
   
    const tweetInputCaracDisp = tweetInputMaxLength - tweetInputBox.value.length
    tweetInputCount.innerHTML = tweetInputCaracDisp

    /*conditional : -charactere
    if (tweetInputBox.value.length > tweetInputMaxLength) {
        tweetInputBox.value = tweetInputBox.value.substring(0, tweetInputMaxLength)
    }*/ 

    //conditional : update count color
    if (tweetInputBox.value.length >= 265) {
        tweetInputCount.style.color = `red`
    } else {
        tweetInputCount.style.color = `#fff`
    }

    //conditional : disabled button
    if (tweetInputCaracDisp < 0) {
        tweetButton.disabled = true
    } else {
        tweetButton.disabled = false
    }
})

