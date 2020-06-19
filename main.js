const parentElement = document.querySelector('body')

const mainHeading = document.createElement('main')
parentElement.append(mainHeading)
const buttonTag = document.createElement('button')
parentElement.append(buttonTag)
buttonTag.append('Remove')
buttonTag.addEventListener('click', function(){
    mainHeading.remove()
})
const imgTag = document.createElement('img')
mainHeading.append(imgTag)
imgTag.className = ('.image')
imgTag.src = 'https://images.pexels.com/photos/57627/pexels-photo-57627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
const aLinkTag = document.createElement('a')
mainHeading.append(aLinkTag)
aLinkTag.className = ('.link')
aLinkTag.href = 'https://images.pexels.com/photos/57627'
