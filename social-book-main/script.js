//............SIDEBAR..........
//............SIDEBAR..........
const menuItem = document.querySelectorAll('.menu-item');


// remove active classlist.....
const removeActive = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    });
}

// add active classlist.....
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');

        if (item.id != 'notification') {
            document.querySelector('.notification').style.display = 'none'
        } else {
            document.querySelector('.notification').style.display = 'block'
            document.querySelector('#notification .count').style.display = 'none'
        }
    })
})

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');

        if (item.id != 'bookmark') {
            document.querySelector('.bookmark').style.display = 'none'
        } else {
            document.querySelector('.bookmark').style.display = 'block'
            document.querySelector('#bookmark .count').style.display = 'none'
        }
    })
})

//....................MESSAGE................
//....................MESSAGE................
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');

message.addEventListener('click', () => {

    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display = 'none'


    setTimeout(() => {
        messageBox.classList.remove('box-sh');
    }, 2000);

})

// ...................THEME CUSTOMIZTION......
// ............THEME CUSTOMIZTION......

const themeMenu = document.querySelector('#themeMenu');
const themBOx = document.querySelector('.theme')


themeMenu.addEventListener('click', () => {
    themBOx.style.display = 'grid'
})

// friend RQUEST BUTTON..............
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');


addBtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none'
    })
});

delbtn.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.style.display = 'none'
    })
});


// WINDOW EVENT.....
window.addEventListener('scroll', () => {
    themBOx.style.display = 'none'
    document.querySelector('.notification').style.display = 'none'
})
function toggleThemeMenu() {
    var themeMenu = document.querySelector('.theme');
    themeMenu.style.display = themeMenu.style.display === 'none' ? 'block' : 'none';
}

function changeThemeColor(color) {
    document.documentElement.style.setProperty('--color-primary', color);
    // Save the selected color to localStorage
    localStorage.setItem('selectedColor', color);
}

// Retrieve the selected color from localStorage on page load
var selectedColor = localStorage.getItem('selectedColor');
if (selectedColor) {
    changeThemeColor(selectedColor);
}

document.getElementById('color1').addEventListener('click', function () {
    changeThemeColor('#0D353F');
});

document.getElementById('color2').addEventListener('click', function () {
    changeThemeColor('#006475');
});

document.getElementById('color3').addEventListener('click', function () {
    changeThemeColor('#027979');
});

document.getElementById('color4').addEventListener('click', function () {
    changeThemeColor('#D9D8A9');
});

document.getElementById('color5').addEventListener('click', function () {
    changeThemeColor('#F47D6B');
});

document.getElementById('font1').addEventListener('click', function () {
    changeFontSize('0.9rem');
});
document.getElementById('font2').addEventListener('click', function () {
    changeFontSize('1rem');
});
document.getElementById('font3').addEventListener('click', function () {
    changeFontSize('1.3rem');
});
document.getElementById('font4').addEventListener('click', function () {
    changeFontSize('1.6rem');
});
document.getElementById('font5').addEventListener('click', function () {
    changeFontSize('1.7rem');
});

function changeFontSize(size) {
    document.documentElement.style.setProperty('--font-size', size);
}
