const answers = document.getElementsByClassName('answers');
const questions = document.getElementsByClassName('questions');
const arrows = document.getElementsByClassName('arrow');

document.getElementById('date').innerHTML = new Date().getFullYear();

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling; 

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    })
};

