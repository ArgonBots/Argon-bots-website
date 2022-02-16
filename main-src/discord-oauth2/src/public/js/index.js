const loginBtn = document.getElementById('user');
const profile = document.getElementById('profile');
const profileMenuContainer = document.getElementById('profile-menu-container');
var beingDisplayed = false;

console.log('Hello there');

const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

function isAuthorized (req, res, next) {
    if(req.user) {
        console.log('User is logged in.');
        console.log(req.user);
        next();
    }
    else {
        console.log('User is not logged in.')
        res.redirect('/');
    }
}

if (isAuthorized) {
    console.log("Authorized");
    loginBtn.style.display = 'none';
    profile.style.display = 'flex';
}
else {
    loginBtn.style.display = 'flex';
    profile.style.display = 'none';
}

profile.addEventListener('click', () => {
    console.log('Works')
    profileMenuContainer.style.display = 'flex';
    beingDisplayed = true;
});

if (beingDisplayed = true) {
    console.log('Being displayed')
    beingDisplayed = false;
}
else {
    console.log('Not being displayed')
}