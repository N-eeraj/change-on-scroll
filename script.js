const section = document.querySelector('section')
const contentList = document.querySelectorAll('.content')

section.style.height = `${100 * contentList.length}dvh`
contentList.forEach(element => element.style.height = `${100 / contentList.length}%`)

let active = 0

contentList[active].classList.add('active')


window.addEventListener('scroll', e => {
    const newActive = Math.round(window.scrollY / window.innerHeight)
    if (newActive === active) return
    active = newActive
    document.querySelector('.active').classList.remove('active')
    contentList[active].classList.add('active')
})