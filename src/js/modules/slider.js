const slider = function(sliderSectionSelector) {

    const sliderSection = document.querySelector(sliderSectionSelector);
    const slider = sliderSection.querySelector('.slider');
    const slides = slider.querySelectorAll('.slider__items'); 
    const slidesField = slider.querySelector('.slider__slides');
    const dots = slider.querySelectorAll('.slider__indicators li');
    const width = window.getComputedStyle(slider.querySelector('.slider__inner')).width;
    
    slidesField.style.width = 100 * slides.length + '%';
    slides.forEach(slide => {
        slide.style.width = width;
    });

    let offset = 0;
    let slideIndex = 0;


    dots.forEach(dot => {
            dot.addEventListener('click', e => {
                const slideTo = e.target.getAttribute('data-slide-to');
                slideIndex = slideTo;
                offset = +width.replace(/\D/g, '') * slideTo;
                slidesField.style.transform = `
                translateX(-${offset}px) `;
                dots.forEach(dot => dot.classList.remove('active'));
                dots[slideIndex].classList.add('active');
            })
            
        });
    
    let timerId;

    function activateSlider() {
        timerId = setInterval(() => {
            slideIndex ++;
            if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
                slideIndex = 0;
            }
            offset = +width.replace(/\D/g, '') * slideIndex;
            slidesField.style.transform = `
            translateX(-${offset}px) `;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }, 4000);
    }
    activateSlider();
    slider.addEventListener('mouseover', () => {
        clearInterval(timerId);
    });
    slider.addEventListener('mouseleave', () => {
        activateSlider();
    });

};

export default slider;
