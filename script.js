
// TRAVEL
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {

    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })

})

function removeActiveClasses() {
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}


// NAVIGATION

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')


open.addEventListener('click',() => container.classList.add('show-nav'))

close.addEventListener('click',() => container.classList.remove('show-nav'))