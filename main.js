const progressEl = document.getElementById('progress')
const btnPrevEl = document.getElementById('prev')
const btnNextEl = document.getElementById('next')
const circlesEl = document.getElementsByClassName('circle')

let numActive = 0

btnNextEl.addEventListener('click', () => {
    numActive++

    circlesEl.item(numActive).classList.toggle('active')
    progressDisplay(numActive)
})

btnPrevEl.addEventListener('click', () => {
    numActive--

    circlesEl.item(numActive + 1).classList.toggle('active')
    progressDisplay(numActive)
})

function progressDisplay(numActive){
    numActive === 0 ? btnPrevEl.disabled = true : btnPrevEl.disabled = false
    numActive === circlesEl.length -1 ? btnNextEl.disabled = true : btnNextEl.disabled = false
    const progressContainerWidth = progressEl.parentElement.offsetWidth
    const progressWidth = Math.floor(progressContainerWidth / (circlesEl.length -1)) * numActive
    progressEl.style.width = progressWidth.toString() + 'px'
}