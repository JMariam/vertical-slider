const sliderContainer = document.querySelector('.slider-container')
const leftSlider = document.querySelector('.left-slide')
const rightSlider = document.querySelector('.right-slide')
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const slidesLength = leftSlider.querySelectorAll('div').length



let activeSlideIndex = 0



leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('upp'))
downButton.addEventListener('click', () => changeSlide('downn'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight

    if(direction === 'upp'){
        activeSlideIndex++
        if (activeSlideIndex > slidesLength -1){
            activeSlideIndex = 0
        }
    }

    else if(direction === 'downn'){
        activeSlideIndex--
        if (activeSlideIndex < 0){
            activeSlideIndex = slidesLength - 1
        }
    }



    rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}