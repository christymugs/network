//DOM
const swiper = document.querySelector('#swiper');
const network = document.querySelector('#network');
const no = document.querySelector('#no');
// constants

const urls = [
    'https://source.unsplash.com/random/1000x1000?sky',
    'https://source.unsplash.com/random/1000x1000?landsacpe',
    'https://source.unsplash.com/random/1000x1000?ocean',
    'https://source.unsplash.com/random/1000x1000?mountain',
    'https://source.unsplash.com/random/1000x1000?forest'
]

//varibales

let cardCount = 0;

function appendNewCard() {
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        onDismiss: appendNewCard,
        onNetwork: () => {
            network.style.animationPlayState = 'running';
            network.classList.toggle('trigger');
        },
        onNo: () => {
            no.style.animationPlayState = 'running';
            no.classList.toggle('trigger');
        }
    });
    //card.element.style.setProperty('--i',cardCount%5)
    swiper.append(card.element);
    cardCount++

    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });
}

// first 5
for (let i = 0; i < 5; i++) {
    appendNewCard();
}
