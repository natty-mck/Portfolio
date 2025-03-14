var currentpage = 1;
document.body.style.overflow = "hidden";


//greeting text typing code
async function greeting() {
    document.getElementById("mainSection").scrollIntoView({ behavior: 'smooth' });
    let phrase = "/Digital Solutions";
    let greeting = document.getElementById("welcomeText");
    let i = 0;

    function type() {
        return new Promise((resolve) => {
            if (i < phrase.length) {
                greeting.innerHTML += phrase[i];
                i++;
                setTimeout(() => {
                    type().then(resolve);
                }, Math.floor(Math.random() * 200) + 1);
            }
            else {
                resolve();
            }
        })
    }
    
    await type();
    document.getElementById("welcomePar").style.display = "block";
    document.getElementById("welcomeGIT-button").style.display = "block";
}

console.log("Everything is in it's right place.")
greeting()


// changing pages
document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        nextpage()
    }
});

document.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        lastpage()
    }
});

async function nextpage() {
    document.body.style.overflow = "auto";
    function goToNextSection() {
        return new Promise((resolve) => {
            switch (currentpage) {
            case 1:
                document.getElementById("aboutMe-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("home-icon").src = "assets/home-icon.png"
                document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon selected.png"
                currentpage = 2;
                break;
            case 2:
                document.getElementById("projectsPage-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("projectDesc").classList.add("info-slide");
                document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon.png"
                document.getElementById("projects-icon").src = "assets/project-icon selected.png"
                currentpage = 3;
                break;
            case 3:
                document.getElementById("contactPage-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("projects-icon").src = "assets/project-icon.png";
                document.getElementById("contact-icon").src = "assets/contact-icon selected.png";
                currentpage = 4;
                break;
            }
            resolve()
        })
    }

    await goToNextSection() 
    document.body.style.overflow = "hidden";
}

async function lastpage() {
    document.body.style.overflow = "auto";
    function goToNextSection() {
        return new Promise((resolve) => {
            switch (currentpage) {
            case 2:
                document.getElementById("mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("home-icon").src = "assets/home-icon selected.png"
                document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon.png"
                currentpage = 1;
                break;
            case 3:
                document.getElementById("aboutMe-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon selected.png"
                document.getElementById("projects-icon").src = "assets/project-icon.png";
                currentpage = 2;
                break;
            case 4:
                document.getElementById("projectsPage-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("projectDesc").classList.add("info-slide");
                document.getElementById("projects-icon").src = "assets/project-icon selected.png"
                document.getElementById("contact-icon").src = "assets/contact-icon.png";
                currentpage = 3;
                break;        
            }
            resolve()
        })
    }

    await goToNextSection() 
    document.body.style.overflow = "hidden";
}

function toHomepage() {
    document.getElementById("mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("home-icon").src = "assets/home-icon selected.png";
    document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon.png"
    document.getElementById("projects-icon").src = "assets/project-icon.png";
    document.getElementById("contact-icon").src = "assets/contact-icon.png";
    currentpage = 1;
}
function toAboutMePage() {
    document.getElementById("aboutMe-mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon selected.png"
    document.getElementById("contact-icon").src = "assets/contact-icon.png";
    document.getElementById("home-icon").src = "assets/home-icon.png";
    currentpage = 2;
}
function toProjectspage() {
    document.getElementById("projectsPage-mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("projectDesc").classList.add("info-slide");
    document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon.png"
    document.getElementById("projects-icon").src = "assets/project-icon selected.png"
    document.getElementById("contact-icon").src = "assets/contact-icon.png";
    document.getElementById("home-icon").src = "assets/home-icon.png";
    currentpage = 3;
}
function toContactPage() {
    document.getElementById("contactPage-mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("aboutMe-icon").src = "assets/aboutMe-icon.png"
    document.getElementById("projects-icon").src = "assets/project-icon.png";
    document.getElementById("home-icon").src = "assets/home-icon.png";
    document.getElementById("contact-icon").src = "assets/contact-icon selected.png";
    currentpage = 4;
}




//projects slider
let slider1 = document.getElementById("slide1");
let slider2 = document.getElementById("slide2");
let slider3 = document.getElementById("slide3");

let img = document.getElementById("imgRotation");

slider1.style.backgroundColor = "#292121";

function resetbackgrounds() {
    slider1.style.backgroundColor = "grey";
    slider2.style.backgroundColor = "grey";
    slider3.style.backgroundColor = "grey";
}

slider1.addEventListener('click', function() {
    img.src = "assets/project1.png";
    resetbackgrounds()
    slider1.style.backgroundColor = "#292121";
});

slider2.addEventListener('click', function() {
    img.src = "assets/project1.png"; //CHANGE
    resetbackgrounds()
    slider2.style.backgroundColor = "#292121"; 
});

slider3.addEventListener('click', function() {
    img.src = "assets/project1.png"; //CHANGE
    resetbackgrounds()
    slider3.style.backgroundColor = "#292121"; 
});


function validateForm() {
    let form = document.getElementById("contact-form");
    let enteredEmail = document.getElementById("email").value;
    let formAction = "https://docs.google.com/forms/u/1/d/1lU8c2CNEOy0NoTx6yQyDVx8a7h_I6C1R-eWBbNLrnkw/formResponse";
    
    if (enteredEmail.substring(enteredEmail.length, enteredEmail.length - 4) === ".com") {
        form.action = formAction; 
        return true;
    }
    else if (enteredEmail.substring(enteredEmail.length, enteredEmail.length - 6) === ".co.uk"){
        form.action = formAction; 
        return true;
    }
    else if (enteredEmail.substring(enteredEmail.length, enteredEmail.length - 4) === ".org"){
        form.action = formAction; 
        return true;
    }
    else if (enteredEmail[0] == "."){
        alert("Invalid email");
        return false;
    }
    else {
        alert("Invalid email");
        return false;
    }
}