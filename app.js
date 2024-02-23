let parrafo = async () => {
    let fetchtxt = await fetch('https://rentry.co/sk2x37n5/raw')
    let data = await fetchtxt.text()
    document.querySelectorAll('.lorem').forEach(lor => {lor.textContent = data})
}
parrafo()

let nav_a = document.querySelectorAll('.nav_a')
let section = document.querySelectorAll('.section')

nav_a[0].classList.add('active')

window.onscroll = () => {
    section.forEach((sec, ind) => {
        if(window.scrollY >= sec.offsetTop - 50){
            nav_a.forEach(n_a => {n_a.classList.remove('active')})
            nav_a[ind].classList.add('active')
        }
    })
}

nav_a.forEach(n_a => {
    n_a.onclick = (e) => {
        e.preventDefault()
        let target = document.querySelector(e.target.getAttribute('href')).offsetTop
        scrollTo({
            top: target,
            behavior: 'smooth'
        })
    }
})