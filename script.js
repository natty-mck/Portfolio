var currentpage = 1;
document.body.style.overflow = "hidden";
//greeting text typing code
async function greeting() {
    document.getElementById("mainSection").scrollIntoView({ behavior: 'smooth' });
    let phrase = "/Welcome()";
    let greeting = document.getElementById("welcomeText");
    let i = 0;

    function type() {
        return new Promise((resolve) => {
            if (i < phrase.length) {
                greeting.innerText += phrase[i];
                i++;
                setTimeout(() => {
                    type().then(resolve);
                }, Math.floor(Math.random() * 400) + 1);
            }
            else {
                resolve();
            }
        })
    }
    
    await type();
    document.getElementById("welcomePar").style.display = "block";
  

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
                document.getElementById("projectsPage-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("home-icon").src = "assets/home-icon.png"
                document.getElementById("projects-icon").src = "assets/project-icon selected.png"
                currentpage = 2;
                break;
            case 2:
                document.getElementById("contactPage-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("projects-icon").src = "assets/project-icon.png";
                document.getElementById("contact-icon").src = "assets/contact-icon selected.png";
                currentpage = 3;
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
                document.getElementById("projects-icon").src = "assets/project-icon.png"
                currentpage = 1;
                break;
            case 3:
                document.getElementById("projectsPage-mainSection").scrollIntoView({ behavior: 'smooth' });
                document.getElementById("projects-icon").src = "assets/project-icon selected.png"
                document.getElementById("contact-icon").src = "assets/contact-icon.png";
                currentpage = 2;
            break;            }
            resolve()
        })
    }

    await goToNextSection() 
    document.body.style.overflow = "hidden";
}

function toHomepage() {
    document.getElementById("mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("home-icon").src = "assets/home-icon selected.png";
    document.getElementById("projects-icon").src = "assets/project-icon.png";
    document.getElementById("contact-icon").src = "assets/contact-icon.png";
    currentpage = 1;
}
function toProjectspage() {
    document.getElementById("projectsPage-mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("projects-icon").src = "assets/project-icon selected.png"
    document.getElementById("contact-icon").src = "assets/contact-icon.png";
    document.getElementById("home-icon").src = "assets/home-icon.png";
    currentpage = 2;
}
function toContactPage() {
    document.getElementById("contactPage-mainSection").scrollIntoView({ behavior: 'smooth' });
    document.getElementById("projects-icon").src = "assets/project-icon.png";
    document.getElementById("home-icon").src = "assets/home-icon.png";
    document.getElementById("contact-icon").src = "assets/contact-icon selected.png";
    currentpage = 3;
}