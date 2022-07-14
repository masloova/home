const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
    
        const blockID = anchor.getAttribute('href')

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const menuItems = document.querySelectorAll('.menu__item');
const modal = document.querySelector('.modal__wrap');

// const bodyWrap = document.getElementById('body');
const wrapper = document.querySelector('.wrapper');
// const bodyElement = document.querySelector('.wrapper__container');

modal.addEventListener('click', (e) => {
    modal.classList.remove("view-modal");
})


for (let item of menuItems) {
    item.addEventListener('click', (event) => {
        const img = item.getElementsByTagName("img")[0].getAttribute("src")
        const data = item.childNodes[1].childNodes[3].childNodes;

        const title = data[1].innerHTML.trim();
        const energy = data[3].innerHTML.trim();
        const description = data[5].innerHTML.trim();
        const total = data[7].innerHTML.trim();

        modal.innerHTML = `
            <div class="modal__container">
                <img 
                    src="./close/close.png" 
                    class="modal__close-icon"
                >
                <div class="modal__img-container">
                    <div class="circle">
                        <img 
                            src="${img}" 
                            class="img__cover-modal"
                        >
                    </div>
                </div>
                <div class="modal__main-wrap">
                    <div class="modal__title-wrap">
                        <div class="modal__title-text">
                            ${title}
                            <span class="modal__title-weight">
                                120 г
                            </span>
                        </div>
                    </div>
                    <div class="modal__description">
                        <div class="modal__description-text">
                            ${description}
                        </div>
                    </div>
                    <div class="modal__energy">
                        <div class="modal__energy-table-wrap">
                            <div class="modal__energy-table-wrap">
                                <div class="modal__energy-name">
                                    <div class="modal__energy-name-item"></div>
                                    <div class="modal__energy-name-item">100 грамм</div>
                                    <div class="modal__energy-name-item">Всего</div>
                                </div>
                                <div class="modal__energy-main">
                                    <div class="modal__energy-main-item">
                                        <div class="modal__energy-main-text">Белки</div>
                                        <div class="modal__energy-main-text">Жиры</div>
                                        <div class="modal__energy-main-text">Углеводы</div>
                                        <div class="modal__energy-main-text">Ккал</div>
                                    </div>
                                    <div class="modal__energy-main-item">
                                        <div class="modal__energy-main-text">0</div>
                                        <div class="modal__energy-main-text">0</div>
                                        <div class="modal__energy-main-text">0</div>
                                        <div class="modal__energy-main-text">0</div>
                                    </div>
                                    <div class="modal__energy-main-item">
                                        <div class="modal__energy-main-text">0</div>
                                        <div class="modal__energy-main-text">0</div>
                                        <div class="modal__energy-main-text">0</div>
                                        <div class="modal__energy-main-text">0</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal__total">
                        <div class="modal__total-text">
                            ${total}
                        </div>
                    </div>
                </div>
            </div>
        `;

        bodyElement.classList.add("bodyFixFon");
        bodyWrap.classList.add("bodyFixFon");
        wrapper.classList.add("bodyFixFon");

        modal.classList.add("view-modal");

        const modalContainer = modal.childNodes[1];
        const closeIcon = document.querySelector('.modal__close-icon');

        closeIcon.addEventListener('click', () => {
            modal.classList.remove("view-modal");
            // bodyElement.classList.remove("bodyFixFon");
            // bodyWrap.classList.remove("bodyFixFon");
            wrapper.classList.remove("bodyFixFon");
        });

        modalContainer.addEventListener('click', (e) => {
            e.stopPropagation()
        });
    })
}
