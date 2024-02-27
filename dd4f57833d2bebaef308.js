import { toggleFavorite, displayFavoriteCharacters, favoriteCharacters } from './favorites.js';
import { renderCharacters } from './render.js';

const charactersContainer = document.querySelector('#characters-container');
const paginationContainer = document.querySelector('#pagination-container');
const modal = document.querySelector('#character-modal');
const modalCharacterName = document.querySelector('#modal-character-name');
const modalCharacterImage = document.querySelector('#modal-character-image');
const modalCharacterInfo = document.querySelector('#modal-character-info');
const closeModalButton = document.querySelector('.close');
const favoriteButton = document.querySelector('#favoriteButton');
const favoriteCharactersContainer = document.querySelector('#favorite-characters-container');
const backButton = document.querySelector('#backButton');
const clearLocalStorageButton = document.querySelector('#clearLocalStorageButton');

let currentPage = 1;
let pages;

// Функция для сохранения данных в localStorage
function saveDataToLocalStorage() {
    localStorage.setItem('currentPage', currentPage);
    localStorage.setItem('favoriteCharacters', JSON.stringify(favoriteCharacters));
}

// Функция для загрузки данных из localStorage
function loadDataFromLocalStorage() {
    const savedCurrentPage = localStorage.getItem('currentPage');
    const savedFavoriteCharacters = localStorage.getItem('favoriteCharacters');

    if (savedCurrentPage) {
        currentPage = parseInt(savedCurrentPage);
    }

    if (savedFavoriteCharacters) {
        favoriteCharacters.splice(0, favoriteCharacters.length, ...JSON.parse(savedFavoriteCharacters));
        // Используем splice для замены всех элементов в favoriteCharacters сохраненными из localStorage
    }
}

// Вызываем функцию загрузки данных при загрузке страницы
window.onload = loadDataFromLocalStorage;

// Обновляем localStorage при изменении данных
window.addEventListener('beforeunload', saveDataToLocalStorage);

function fetchCharacters(page) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(response => response.json())
        .then(data => {
            renderCharacters(data, charactersContainer, favoriteCharacters); // Используем функцию для отображения персонажей
            const charactersPerPage = data.results.length; // количество персонажей на странице
            const totalCharacters = data.info.count; // общее количество персонажей
            pages = Math.ceil(totalCharacters / charactersPerPage); // общее количество страниц
            renderPagination();
        });
}

function renderPagination() {
    paginationContainer.innerHTML = ''; // Очищаем содержимое контейнера перед перерисовкой
    const maxVisiblePages = 5; // Максимальное количество видимых страниц
    const sidePages = Math.floor((maxVisiblePages - 1) / 2); // Количество страниц с каждой стороны от текущей страницы
    let startPage = Math.max(1, currentPage - sidePages); // Начальная страница пагинации
    let endPage = Math.min(pages, startPage + maxVisiblePages - 1); // Конечная страница пагинации

    if (currentPage === pages) {
        endPage = pages;
    }

    const showStartDots = startPage > 1; // Показывать многоточие перед промежуточными страницами
    const showEndDots = endPage < pages; // Показывать многоточие после промежуточных страниц

    // Первая страница
    const firstPageButton = document.createElement('button');
    firstPageButton.textContent = '<<';
    firstPageButton.addEventListener('click', () => {
        currentPage = 1;
        fetchCharacters(currentPage);
    });
    paginationContainer.appendChild(firstPageButton);

    // Предыдущая страница
    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            fetchCharacters(currentPage);
        }
    });
    paginationContainer.appendChild(prevButton);

    if (showStartDots) {
        addDots();
    }

    // Добавляем промежуточные страницы
    for (let i = startPage; i <= endPage; i++) {
        addPage(i);
    }

    if (showEndDots) {
        addDots();
    }

    // Следующая страница
    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.addEventListener('click', () => {
        if (currentPage < pages) {
            currentPage++;
            fetchCharacters(currentPage);
        }
    });
    paginationContainer.appendChild(nextButton);

    // Последняя страница
    const lastPageButton = document.createElement('button');
    lastPageButton.textContent = '>>';
    lastPageButton.addEventListener('click', () => {
        currentPage = pages;
        fetchCharacters(currentPage);
    });
    paginationContainer.appendChild(lastPageButton);
}

function addPage(pageNumber) {
    let span = document.createElement('span');
    span.textContent = pageNumber;
    if (pageNumber === currentPage) {
        span.classList.add('active');
    }
    span.addEventListener('click', () => {
        currentPage = pageNumber;
        fetchCharacters(currentPage);
    });
    paginationContainer.appendChild(span);
}

function addDots() {
    let span = document.createElement('span');
    span.textContent = '...';
    paginationContainer.appendChild(span);
}

function updateFavoriteButton(characterCard, character) {
    if (characterCard) {
        const addToFavoriteBtn = characterCard.querySelector('.add-button');
        if (addToFavoriteBtn) {
            if (favoriteCharacters.includes(character.id)) {
                addToFavoriteBtn.textContent = 'Убрать из избранного';
            } else {
                addToFavoriteBtn.textContent = 'Добавить в избранное';
            }
        }
    }
}



// Обработчик события для кнопки "Избранное"
favoriteButton.addEventListener('click', () => {
    charactersContainer.style.display = 'none';
    paginationContainer.style.display = 'none';
    favoriteButton.style.display = 'none';
    favoriteCharactersContainer.style.display = 'grid';
    backButton.style.display = 'block';
    displayFavoriteCharacters(favoriteCharactersContainer);
});

// Обработчик события для кнопки "Назад"
backButton.addEventListener('click', () => {
    charactersContainer.style.display = 'grid';
    paginationContainer.style.display = 'block';
    favoriteButton.style.display = 'block';
    favoriteCharactersContainer.style.display = 'none';
    backButton.style.display = 'none';
});

// Обработчик события для кнопки "Очистить Local Storage"
clearLocalStorageButton.addEventListener('click', () => {
    localStorage.clear();
    // Очищаем данные на странице, которые отображают информацию из localStorage
    currentPage = 1;
    favoriteCharacters.splice(0); // Очищаем массив избранных персонажей
    charactersContainer.innerHTML = '';
    paginationContainer.innerHTML = '';
    favoriteCharactersContainer.innerHTML = '';
});

fetchCharacters(currentPage);
export { updateFavoriteButton };