const translations = {
  uk: {
    "About the shelter": "Про притулок",
    "Our pets": "Наші тварини",
    "Help the shelter": "Допомогти притулку",
    "Contacts": "Контакти",
    "Not only people need a house": "Не тільки людям потрібен будинок",
    "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!":
      "Ми пропонуємо дати шанс маленькому і милим щеняті з надзвичайно широким і відкритим серцем. Він або вона будуть любити вас більше, ніж хто-небудь інший у світі, ви побачите!",
    "Make a friend": "Зробіть друга",
    "About the shelter ‘Cozy House’": "Про притулок ‘Косі Хаус’",
    "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.":
      "Наразі в нас є 121 собака та 342 коти, і статистика показує, що лише 20% з них знайдуть родину. Інші продовжать жити з нами і чекатимуть на щасливий шанс стати щиро улюбленими.",
    "We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels.":
      "Ми годуємо наших підопічних найкращою їжею і переконуємося, що вони не хворіють, відчувають себе комфортно (включаючи психологічно) і добре. Нас підтримують 87 волонтерів та 28 працівників різних рівнів кваліфікації.",
    "Our friends who are looking for a house": "Наші друзі, які шукають будинок",
    "Katrine": "Катрина",
    "Learn more": "Дізнатися більше",
    "Jennifer": "Дженніфер",
    "Woody": "Вуді",
    "Get to know the rest": "Познайомтесь з рештою",
    "How you can help our shelter": "Як ви можете допомогти нашому притулку",
    "Pet food": "Їжа для тварин",
    "Transportation": "Транспорт",
    "Toys": "Іграшки",
    "Bowls and cups": "Миски та чашки",
    "Shampoos": "Шампуні",
    "Vitamins": "Вітаміни",
    "Medicines": "Ліки",
    "Collars / leashes": "Нашийники / повідці",
    "Sleeping areas": "Місця для сну",
    "You can also make a donation": "Ви також можете зробити пожертву",
    "Name of the bank / Type of bank account": "Назва банку / Тип банківського рахунку",
    "Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.":
      "Юридична інформація та lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "For questions and suggestions": "Для запитань та пропозицій",
    "We are waiting for your visit": "Ми чекаємо на ваш візит"
  },
  en: {
    "About the shelter": "About the shelter",
    "Our pets": "Our pets",
    "Help the shelter": "Help the shelter",
    "Contacts": "Contacts",
    "Not only people need a house": "Not only people need a house",
    "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!":
      "We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!",
    "Make a friend": "Make a friend",
    "About the shelter ‘Cozy House’": "About the shelter ‘Cozy House’",
    "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.":
      "Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.",
    "We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels.":
      "We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels.",
    "Our friends who are looking for a house": "Our friends who are looking for a house",
    "Katrine": "Katrine",
    "Learn more": "Learn more",
    "Jennifer": "Jennifer",
    "Woody": "Woody",
    "Get to know the rest": "Get to know the rest",
    "How you can help our shelter": "How you can help our shelter",
    "Pet food": "Pet food",
    "Transportation": "Transportation",
    "Toys": "Toys",
    "Bowls and cups": "Bowls and cups",
    "Shampoos": "Shampoos",
    "Vitamins": "Vitamins",
    "Medicines": "Medicines",
    "Collars / leashes": "Collars / leashes",
    "Sleeping areas": "Sleeping areas",
    "You can also make a donation": "You can also make a donation",
    "Name of the bank / Type of bank account": "Name of the bank / Type of bank account",
    "Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.":
      "Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "For questions and suggestions": "For questions and suggestions",
    "We are waiting for your visit": "We are waiting for your visit"
  }
};




function updateLanguage(language) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-translate');
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });
}


document.getElementById("language-switcher").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  updateLanguage(selectedLanguage);
  localStorage.setItem("language", selectedLanguage);
});



const savedLanguage = localStorage.getItem("language") || "uk";
updateLanguage(savedLanguage);
document.getElementById("language-switcher").value = savedLanguage;


const adminCredentials = {
  username: "admin",
  password: "admin123"
};

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === adminCredentials.username && password === adminCredentials.password) {
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }
});

