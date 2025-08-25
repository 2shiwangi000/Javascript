document.addEventListener('DOMContentLoaded', function () {
    const cursorIcon = document.querySelector('.cursor-icon');
    const iconOptions = document.querySelectorAll('.icon-option');
    const sizeUpBtn = document.getElementById('sizeUp');
    const sizeDownBtn = document.getElementById('sizeDown');
    const changeColorBtn = document.getElementById('changeColor');
    const resetBtn = document.getElementById('reset');
    let currentSize = 30;
    let currentIcon = 'fas fa-star';
    let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    let colorIndex = 0;

    //move icon with cursor
    document.addEventListener('mousemove', function (e) {
        cursorIcon.style.left = (e.pageX - 15) + 'px';
        cursorIcon.style.top = (e.pageY - 15) + 'px';
    })

    //change icon type
    iconOptions.forEach(option => {
        option.addEventListener('click', function () {
            iconOptions.forEach(opt => opt.classList.remove('active'));

            this.classList.add('active');
            currentIcon = this.getAttribute('data-icon');
            cursorIcon.innerHTML = `<i class="${currentIcon}"></i>`;
        })
    })

    //change icon color
    changeColorBtn.addEventListener('click', function () {
        colorIndex = (colorIndex + 1) % colors.length;
        cursorIcon.style.color = colors[colorIndex];
    })

    //hide cursor icon when mouse leaves the window
    document.addEventListener('mouseleave', function () {
        cursorIcon.style.opacity = '0';
    })

    //show cursor icon when mouse enters the window
    document.addEventListener('mouseenter', function () {
        cursorIcon.style.opacity = '1';
    })
})