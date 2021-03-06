const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href');

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const menuItems = document.querySelectorAll('.menu__item');
const modal = document.querySelector('.modal__wrap');
const modalContainer = document.querySelector('.modal__container');

const bodyContainer = document.getElementById('body');

modal.addEventListener('click', (e) => {
    modal.classList.remove("view-modal");

    bodyContainer.classList.remove("background__fix");
    modalContainer.innerHTML = '';
});

const topBtn = document.querySelector('.top__btn');

topBtn.addEventListener('click', () => {
    document.getElementById('#menu-title').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});

const wrapperContainer = document.querySelector('.wrapper__container');

wrapperContainer.addEventListener('scroll', (e) => {
    const height = wrapperContainer.scrollTop;

    if (height > 500) {
        topBtn.classList.add("btn__active");
    } else {
        topBtn.classList.remove("btn__active");
    }
});

for (let item of menuItems) {
    item.addEventListener('click', (e) => {
        const img = item.getElementsByTagName("img")[0].getAttribute("src")
        const data = item.childNodes[1].childNodes[3].childNodes;

        const title = data[1].innerHTML.trim();
        // const energy = data[3].innerHTML.trim();
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
                                120 ??
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
                                    <div class="modal__energy-name-item">100 ??????????</div>
                                    <div class="modal__energy-name-item">??????????</div>
                                </div>
                                <div class="modal__energy-main">
                                    <div class="modal__energy-main-item">
                                        <div class="modal__energy-main-text">??????????</div>
                                        <div class="modal__energy-main-text">????????</div>
                                        <div class="modal__energy-main-text">????????????????</div>
                                        <div class="modal__energy-main-text">????????</div>
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

        modal.classList.add("view-modal");
        bodyContainer.classList.add('background__fix');

        const modalContainer = modal.childNodes[1];
        const closeIcon = document.querySelector('.modal__close-icon');

        closeIcon.addEventListener('click', () => {
            bodyContainer.classList.remove("background__fix");

            modal.classList.remove("view-modal");
            modalContainer.innerHTML = '';
        });

        modalContainer.addEventListener('click', (e) => {
            e.stopPropagation()
        });
    })
}
