class Memorama {

    constructor() {

        this.canPlay = false;

        this.card1 = null;
        this.card2 = null;

        this.availableImages = ['Esperanza1', 'Amistad2', 'Paciencia3', 'Alegria4', 'Diversion5', 'Compania6', 'Paz7', 'Union8', 'Perdon9', 'Valentia10', 'Confianza11', 'Amor12'];
        this.orderForThisRound = [];
        this.cards = Array.from(document.querySelectorAll(".board-game figure"));

        this.starGame();

        console.log(this.orderForThisRound);
    }

    starGame() {
        this.setNewOrder();
        this.setImagesInCards();
        this.openCards();
        this.closeCards();
    }

    setNewOrder() {
        this.orderForThisRound = this.availableImages.concat(this.availableImages);
        this.orderForThisRound.sort(() => Math.random() - 0.5);
    }
    setImagesInCards() {

        for (const key in this.cards) {

            const card = this.cards[key];
            const image = this.orderForThisRound[key];
            const imgLabel = card.children[1].children[0];

            imgLabel.src = `./images/${image}.jpg`;
        }
    }
    openCards() {
        this.cards.forEach(card => card.classList.add(opened));

        setTimeout(() => {
            this.closeCards();
        }, 900);

    }
    closeCards() {
        this.cards.forEach(card => card.classList.remove(opened));
    }

}


document.addEventListener("DOMContentLoaded", () => {

    function flipCard() {
        this.classList.add("opened");
    }

    const card = document.querySelectorAll("figure");
    card.forEach(card => {

        card.addEventListener("click", flipCard);

    });

    new Memorama();

});