const coldListRolls = [
    {
        name: 'Ролл с сыром Дор Блю',
        weight: '268',
        description: 'Состав: лист нори, рис, сыр Дор Блю, творожный сыр, пармезан, виноград, соус терияки',
        total: 271,
        calories: 581,
        // белки
        squirrels: 19,
        // жиры
        fats: 24,
        // углеводы
        carbohydrates: 75,
        img: './coldrolls/1.png'
    },
    {
        name: 'Калифорния с красным рисом',
        weight: '216',
        description: 'Состав: лист нори, рис, соус спайс, крабовые палочки, авокадо, огурец, тобико',
        total: 199,
        calories: 394,
        // белки
        squirrels: 9,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 66,
        img: './coldrolls/2.png'
    },
    {
        name: 'Фруктовый ролл',
        weight: '236',
        description: 'Состав: лист нори, рис, сыр, виноград, яблоко, ананас',
        total: 157,
        calories: 402,
        // белки
        squirrels: 7,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 72,
        img: './coldrolls/3.png'
    },
    {
        name: 'Ролл с мраморным сыром',
        weight: '268',
        description: 'Состав: лист нори, рис, сыр мраморный, творожный сыр, пармезан, виноград, терияки',
        total: 244,
        calories: 581,
        // белки
        squirrels: 20,
        // жиры
        fats: 24,
        // углеводы
        carbohydrates: 75,
        img: './coldrolls/4.png'
    },
    {
        name: 'Инь-ян',
        weight: '291',
        description: 'Состав: лист нори, рис, огурец, сыр, красная икра, кунжут',
        total: 228,
        calories: 659,
        // белки
        squirrels: 15,
        // жиры
        fats: 23,
        // углеводы
        carbohydrates: 105,
        img: './coldrolls/5.png'
    },
    {
        name: 'Ролл курица-ананас',
        weight: '286',
        description: 'Состав: лист нори, рис, курица, ананас, сыр творожный, тобика, кунжут',
        total: 261,
        calories: 631,
        // белки
        squirrels: 21,
        // жиры
        fats: 31,
        // углеводы
        carbohydrates: 73,
        img: './coldrolls/6.png'
    },
    {
        name: 'Морской коктейль',
        weight: '0',
        description: 'Состав: лист нори, рис, салат чука, морской коктейль в масле',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './coldrolls/7.png'
    },
    {
        name: 'Маленькие роллы',
        weight: '151',
        description: 'Состав: лист нори, рис, майонез, тобика, краб. палочки, начинка на выбор (угорь, курица, лосось, огурец, авокадо, креветка, тунец)',
        total: 117,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './coldrolls/8.png'
    },
    {
        name: 'Имя ролла',
        weight: '0',
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './coldrolls/9.png'
    },
    {
        name: 'Цезарь',
        weight: '253',
        description: 'Состав: лист нори, рис, майонез, салат, курица, помидоры, пармезан',
        total: 208,
        calories: 452,
        // белки
        squirrels: 18,
        // жиры
        fats: 14,
        // углеводы
        carbohydrates: 67,
        img: './coldrolls/10.png'
    },
];

const hotListRolls = [
    {
        name: 'Роллы с тунцом темпура',
        weight: '398',
        description: '',
        total: 302,
        calories: 982,
        // белки
        squirrels: 23,
        // жиры
        fats: 17,
        // углеводы
        carbohydrates: 190,
        img: './hotrolls/1.png'
    },
    {
        name: 'Роллы с копченым лососем темпура',
        weight: '383',
        description: 'Состав: лист нори, рис, копченый лосось, сыр, темпура',
        total: 290,
        calories: 980,
        // белки
        squirrels: 21,
        // жиры
        fats: 18,
        // углеводы
        carbohydrates: 190,
        img: './hotrolls/2.png'
    },
    {
        name: 'Ролл с копченой курицей темпура',
        weight: '413',
        description: 'Состав: лист нори, рис, соус спайс, копченая курица, тобика, огурец, авокадо, темпура, кунжут',
        total: 275,
        calories: 1031,
        // белки
        squirrels: 22,
        // жиры
        fats: 23,
        // углеводы
        carbohydrates: 191,
        img: './hotrolls/3.png'
    },
    {
        name: 'Корейский ролл темпура',
        weight: '408',
        description: 'Состав: лист нори, рис, сыр, копченая курица, перец маринованный, морковь по-корейски, темпура',
        total: 215,
        calories: 973,
        // белки
        squirrels: 21,
        // жиры
        fats: 18,
        // углеводы
        carbohydrates: 188,
        img: './hotrolls/4.png'
    },
    {
        name: 'Томаго с лососем',
        weight: '261',
        description: 'Состав: лист нори, рис, соус спайс, копченый лосось, зеленый лук, яйцо, унаги соус, авокадо',
        total: 207,
        calories: 435,
        // белки
        squirrels: 14,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 70,
        img: './hotrolls/5.png'
    },
    {
        name: 'Томаго с курицей',
        weight: '291',
        description: 'Состав: лист нори, рис, соус спайс, курица, огурец, зеленый лук, соус барбекю, яйцо',
        total: 166,
        calories: 432,
        // белки
        squirrels: 15,
        // жиры
        fats: 12,
        // углеводы
        carbohydrates: 69,
        img: './hotrolls/6.png'
    },
    {
        name: 'Калифорния темпура в кляре / сухарях',
        weight: '378',
        description: 'Состав: лист нори, рис, соус спайс, авокадо, огурец, тобика, краб, темпура',
        total: 266,
        calories: 942,
        // белки
        squirrels: 17,
        // жиры
        fats: 16,
        // углеводы
        carbohydrates: 189,
        img: './hotrolls/7.png'
    },
    {
        name: 'Имя ролла',
        weight: '0',
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './hotrolls/8.png'
    },
    {
        name: 'Имя ролла',
        weight: '0',
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './hotrolls/9.png'
    },
    {
        name: 'Корейский темпура в кляре/сухарях',
        weight: '408',
        description: 'Состав: лист нори, рис, сыр, копченая курица, перец маринованный, морковь по-корейски, темпура',
        total: 215,
        calories: 973,
        // белки
        squirrels: 21,
        // жиры
        fats: 18,
        // углеводы
        carbohydrates: 188,
        img: './hotrolls/10.png'
    },
    {
        name: 'Имя ролла',
        weight: '0',
        description: 'Описания нет',
        total: 0,
        calories: 0,
        // белки
        squirrels: 0,
        // жиры
        fats: 0,
        // углеводы
        carbohydrates: 0,
        img: './hotrolls/11.png'
    },
    {
        name: 'Сыр-сыр темпура в кляре/сухарях',
        weight: '413',
        description: 'Состав: лист нори, рис, мраморный сыр, сыр с плесенью, творожный сыр, пармезан, виноград, соус терияки, темпура',
        total: 286,
        calories: 1070,
        // белки
        squirrels: 23,
        // жиры
        fats: 24,
        // углеводы
        carbohydrates: 196,
        img: './hotrolls/12.png'
    },
];

const sandwichList = [
    {
        name: 'Чука сэндвич',
        weight: '378',
        description: 'Состав: лист нори, рис, сыр, курица, чука, соус терияки, темпура',
        total: 266,
        calories: 942,
        // белки
        squirrels: 17,
        // жиры
        fats: 16,
        // углеводы
        carbohydrates: 189,
        img: './sandwich/1.png'
    },
];

const coldRollsListElement = document.getElementById('cold-rolls-list');
const hotRollsListElement = document.getElementById('hot-rolls-list');
const sandwichListElement = document.getElementById('sandwich-list');

const getMenuItem = (data) => {
    return data.map((item) => {
        return (`
            <div class="menu__item">
                <div class="menu__item-wrap">
                    <div class="menu__item-img">
                        <img 
                            src=${item.img}
                            class="img__cover"
                        >
                    </div>
                    <div class="menu__wrap-info">
                        <div class="menu__item-title">
                            ${item.name}
                        </div>
                        <div class="menu__item-energy">
                            ${item.weight} г \ ${item.calories} кк
                        </div>
                        <div class="menu__item-description">
                            ${item.description}
                        </div>
                        <div class="menu__item-total">
                            ${item.total} ₽
                        </div>
                    </div>
                </div>
            </div>
        `);
    })
    .join('')
};

coldRollsListElement.innerHTML = `
    ${
        getMenuItem(coldListRolls)
    }
`;

hotRollsListElement.innerHTML = `
    ${
        getMenuItem(hotListRolls)
    }
`;

sandwichListElement.innerHTML = `
    ${
        getMenuItem(sandwichList)
    }
`;
