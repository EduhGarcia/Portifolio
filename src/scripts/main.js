const myObserver = new IntersectionObserver((entries) => observerElement(entries))

const elementsAnimation = document.querySelectorAll('.hidden')
const elementsAnimationTitle = document.querySelectorAll('.hidden-title')

elementsAnimation.forEach( element => {
    myObserver.observe(element)
})

elementsAnimationTitle.forEach( element => {
    myObserver.observe(element)
})

const observerElement = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
}