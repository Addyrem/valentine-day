const alternatives = [
    {text:"", images:"images/cat-01.gif"},
    {text:"I promise we will definetely get Purple!", images:"images/momo-dog.jpg"},
    {text:"Will let you bite me every single day...", images:"images/momo-bite.jpg"},
    {text:"Come on momo, Please let me see this pretty face everyday?", images:"images/momo-yellow.jpg"},
    {text:"Kitna bhav khaegi ab to krde...", images:"images/last.jpg"},
    {text:"Dekhle poora package to theek thaak he hai ", images:"images/aadi.jpg"},
];

const ohyes = {
    text:"Hehehehehe that's my momo 🤎",
    images:"images/momo-pick.jpg",
    font: "font-size: 36px; font-weight: bold;"
};

const cat = document.querySelector('.cat');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');
const container = document.getElementById('container'); // Added container for heart animation

let count = 0;

function updateDisplay(item) {
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

function showHeartAnimation() {
    document.addEventListener('mousemove', function(e) {
        let heart = document.createElement('span');
        let x = e.offsetX;
        let y = e.offsetY;
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        
        let size = Math.random() * 80;
        heart.style.width = 20 + size + 'px';
        heart.style.height = 20 + size + 'px';

        let transformValue = Math.random() * 360;
        heart.style.transform = 'rotate(' + transformValue + 'deg)';
        
        container.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 1000);
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent == "Yes!!!") {
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
            showHeartAnimation(); // Show the animated heart
            document.querySelector('.title').textContent = "Let's decide your outfit for the date now! "; // Updated title text

        }
        
        if (button.textContent == 'No') {
            count++;
            if (count < alternatives.length) {
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
