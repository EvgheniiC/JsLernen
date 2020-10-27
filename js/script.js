/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)
Remove all ad units from the page (right side of the site)

2) Изменить жанр фильма, поменять "комедия" на "драма"
Change the genre of the film, change "comedy" to "drama"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
Change the background of the movie poster to "bg.jpg". It lies in the img folder.
Implement with JS only

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
Create a list of movies on the page based on the data from this JS file.
Sort them alphabetically

5) Добавить нумерацию выведенных фильмов 
Add numbering of the output movies*/

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo__adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    list = document.querySelector('.promo__interactive-list');

promo__adv.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

/* list.forEach(item =>{ //if querySelectorAll use (alternativa)
    item.remove();
}) */

list.innerHTML = ""; // if querySelector use
movieDB.movies.sort();
movieDB.movies.forEach((film,i) => {
    list.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
</li>
    `
});