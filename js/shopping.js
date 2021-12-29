const musicBotInfo = document.getElementById('music-bot-icon-1-more-info');
const adminBotInfo = document.getElementById('admin-bot-icon-1-more-info');
const musicPopupBackground = document.getElementById('modal-container');
const musicPopupClose = document.getElementById('close-symbol');
const adminPopupBackground = document.getElementById('modal-container1');
const adminPopupClose = document.getElementById('close-symbol1');

musicBotInfo.addEventListener('click', () => {
    musicPopupBackground.classList.add('show');
});

adminBotInfo.addEventListener('click', () => {
    adminPopupBackground.classList.add('show');
});
musicPopupBackground.addEventListener('click', () => {
    musicPopupBackground.classList.remove('show')
});
musicPopupClose.addEventListener('click', () => {
    musicPopupBackground.classList.remove('show')
});
adminPopupBackground.addEventListener('click', () => {
    adminPopupBackground.classList.remove('show')
});
adminPopupClose.addEventListener('click', () => {
    adminPopupBackground.classList.remove('show')
});