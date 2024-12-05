//this code automatically scrolls the webpage to the section with the ID About as soon as the DOM is fully loaded. 
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('About').scrollIntoView();
});

//night mode and bright mode
let button = document.getElementById('mode');
let isNightMode = localStorage.getItem('mode') === 'night';

button.addEventListener('click', function () {
    localStorage.setItem('mode', isNightMode ? 'night' : 'bright');
    if (isNightMode) {
        document.body.classList.remove('bright-mode');
        document.body.classList.add('night-mode');
        button.classList.add('fa-sun');
        button.classList.remove('fa-moon');
        button.style.color = '#FFD43B';
        isNightMode = false;
    } else {
        document.body.classList.remove('night-mode');
        document.body.classList.add('bright-mode');
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
        button.style.color = '#FFD43B';
        isNightMode = true;
    }
});
button.click();

//view resume and ref letter
function openPDF(fileName) {
    window.location.href = fileName;
}


// typing animation where each character of the text in the element with the class name fades in one by one.
document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector('.name');
    const strText = text.textContent;
    const splitText = strText.split('');
    text.textContent = '';

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
});

//animation from left to right
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            // Unobserve the element once it is shown to keep it visible
            observer.unobserve(entry.target);
        }
    });
});

let hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


let srvs = document.querySelectorAll('.srv');

srvs.forEach(srv => {
    let gitHubIcon = srv.querySelector('.fa-github');
    let gitHubTooltip = srv.querySelector('.tooltip');

    // Add event listeners to show/hide the tooltip
    gitHubIcon.addEventListener('mouseenter', () => {
        gitHubTooltip.style.opacity = '1';
    });

    gitHubIcon.addEventListener('mouseleave', () => {
        gitHubTooltip.style.opacity = '0';
    });
});


