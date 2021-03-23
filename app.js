let body = document.querySelector('body')
let imgUrl = document.querySelector('#img-url')
let textTop = document.querySelector('#text-top')
let textBottom = document.querySelector('#text-bottom')

let btn = document.querySelector('input[type="submit"]')
btn.addEventListener('click', function(e) {
  e.preventDefault()
  if (validInputs()){
    let newDiv = createDiv()
    let newImg = createImage(imgUrl)
    let newTextTop = createCaption(textTop.value, 'top')
    let newTextCenter = createCaption('(click to delete)', 'center')
    let newTextBottom = createCaption(textBottom.value, 'bottom')

    newDiv.append(newImg)
    newDiv.append(newTextTop)
    newDiv.append(newTextCenter)
    newDiv.append(newTextBottom)
    document.querySelector('#meme-containers').append(newDiv)

    imgUrl.value = null
    textTop.value = null
    textBottom.value = null
  }
})

function validInputs(){
  valid = false
  if (imgUrl.value && textTop.value && textBottom.value) {
    valid = true
  }
  return valid
}

function createDiv() {
  el = document.createElement('div')
  el.classList.add('container')
  return el
}

function createImage(imgUrl) {
  el = document.createElement('img')
  el.setAttribute('src', imgUrl.value)
  return el
}

function createCaption(text,pos) {
  let el = document.createElement('p')
  el.innerText = text
  el.classList.add(pos)
  return el
}

// Delete Meme
memes = document.querySelector('#meme-containers')

memes.addEventListener('mouseover', function(e){
  container = e.target.parentElement
  if (container.classList.contains("container")){
    text = container.querySelector('.center')
    text.classList.add('visible')
  }
})

memes.addEventListener('mouseout', function (e) {
  container = e.target.parentElement
  if (container.classList.contains("container")) {
    text = container.querySelector('.center')
    text.classList.remove('visible')
  }
})

memes.addEventListener('click', function(e) {
  container = e.target.parentElement
  if (container.classList.contains("container"))
  container.remove()
})