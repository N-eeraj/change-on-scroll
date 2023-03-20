const section = document.querySelector('section')
const contentList = document.querySelectorAll('.content')

section.style.height = `${100 * contentList.length}dvh`
contentList.forEach(element => element.style.height = `${100 / contentList.length}%`)

contentList[0].classList.add('active')

window.addEventListener('scroll', e => {
    document.querySelector('.active').classList.remove('active')
    contentList[Math.round(window.scrollY / window.innerHeight)].classList.add('active')
})