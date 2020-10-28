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

document.addEventListener('DOMContentLoaded', () => {


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

    const deleteWerbung = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'Драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    /* list.forEach(item =>{ //if querySelectorAll use (alternativa)
        item.remove();
    }) */


    // Use Listner
    const btns = document.querySelectorAll('button'),
        //  btn1 = document.querySelector('button'),
        overlay = document.querySelector('.overlay');


    /* btn.addEventListener('click', () => {
        alert('BOM');
    }); */

    let i = 0;
    const deleteElement = (e) => {
        console.log(e.target);
        console.log(e.type);
        /*  i++;
         if (i==1){
             btn1.removeEventListener('click', deleteElement);
         } */
    };

    /* btn.addEventListener('click', deleteElement);
    overlay.addEventListener('click', deleteElement); */

    btns.forEach(btn => {
        btn.addEventListener('click', deleteElement, {
            once: true
        });
    });

    const link = document.querySelector('a');

    link.addEventListener('click', (e) => { // не переходим на страницу
        e.preventDefault();
        console.log(e.target);
    });

    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    1 Implement the functionality that after filling out the form and clicking the "Confirm" button -
    a new movie is added to the list. The page should not reload.
    The new movie must be added to movieDB.movies.
    To get access to the value of input, we refer to it as input.value;
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    2 If the title of the movie is more than 21 characters - trim it and add three dots
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка 
    3 When you click on the trash can - the item will be removed from the list 
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"   
    4 If the form has a checkmark "Make favorite" - display the message in the console:
    "Adding your favorite movie"
    
    5) Фильмы должны быть отсортированы по алфавиту    
    5 Films must be sorted alphabetically
    */

    const addForm = document.querySelector('form.add'),
        addinput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type = "checkbox"]'),
        deleletButton = document.querySelector('.promo__interactive-item');

    addForm.addEventListener('submit', (e) => { // не переходим на страницу
        e.preventDefault();
        let newFilm = addinput.value;
        const liblingsFilm = checkbox.checked; //проверяет отмечен ли chechbox

        if(liblingsFilm){
            console.log("Adding your favorite movie");
        }

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substr(0, 22)}...`;
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
        }
        e.target.reset();
    });

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(film, parent) {
        parent.innerHTML = ""; // if querySelector use
        sortArr(film);
        film.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
            `
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(film,parent);
            });
        });
    }

    deleteWerbung(promo__adv);
    makeChanges();
    createMovieList(movieDB.movies, list);

});