const generateFunction = function (evt) {
    document.querySelector('p.bottom-text').innerHTML = ""
    document.querySelector('p.top-text').innerHTML = ""
    document.querySelector('div.error').innerHTML = ""
    document.querySelector('div.error').innerHTML = ""

    let memeForm = evt.target

    let imagesdDropdown = memeForm.memeImage.value
    let bottomText = memeForm.memeBottomText.value
    let topText = memeForm.memeTopText.value
    let errorMessage = document.querySelector('div.error')
    let imageToApply = document.querySelector('div.meme-display')
    let myImg = imageToApply.getElementsByTagName('img')[0]
    if (bottomText == "") {
        errorMessage.innerText += "Bottom Text is Required\n"
        myImg.src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown'
        myImg.alt = "Placeholder Image"
        document.querySelector('p.bottom-text').innerHTML = ""
        document.querySelector('p.top-text').innerHTML = ""
    }
    if (topText == "") {
        errorMessage.innerText += "Top Text is Required\n"
        myImg.src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown'
        myImg.alt = "Placeholder Image"
        document.querySelector('p.bottom-text').innerHTML = ""
        document.querySelector('p.top-text').innerHTML = ""
    }
    if (imagesdDropdown == "") {
        errorMessage.innerText += "Image is Required\n"
        myImg.src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown'
        myImg.alt = "Placeholder Image"
        document.querySelector('p.bottom-text').innerHTML = ""
        document.querySelector('p.top-text').innerHTML = ""
    }

    if (bottomText !== "" && topText !== "" && imagesdDropdown !== "") {
        document.querySelector('div.error').innerHTML = ""
        let topTexttoDisplay = document.querySelector('p.top-text')
        topTexttoDisplay.innerHTML += topText

        let bottomTexttoDisplay = document.querySelector('p.bottom-text')
        bottomTexttoDisplay.innerHTML += bottomText

        if (imagesdDropdown == 'fry-meme') {
            myImg.src = '/img/fry-meme.png'
            myImg.alt = "fry-meme"

        }
        if (imagesdDropdown == 'one-does-not-simply-meme') {
            myImg.src = '/img/one-does-not-simply-meme.png'
            myImg.alt = "one-does-not-simply-meme"
        }
        if (imagesdDropdown == 'most-interesting-man-meme') {
            myImg.src = '/img/most-interesting-man-meme.png'
            myImg.alt = "most-interesting-man-meme"
        }
    }

    evt.preventDefault() 
}

const resetFunction = function (evt) {
    bottomText = ''
    topText = ''
    imagesdDropdown = ''
    let imageToApply = document.querySelector('div.meme-display')
    let myImg = imageToApply.getElementsByTagName('img')[0]
    myImg.src = 'https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown'
    myImg.alt = "Placeholder Image"
    document.querySelector('p.bottom-text').innerHTML = ""
    document.querySelector('p.top-text').innerHTML = ""
    document.querySelector('div.error').innerHTML = ""
}

document.querySelector('form').addEventListener('submit', generateFunction)

document.querySelector('form').addEventListener('reset', resetFunction)