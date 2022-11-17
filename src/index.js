import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './css/styles.css';
import NewsApiService from './news_axios';
// import renderCard  from './renderCard';


const refs = {
  formEl: document.querySelector('.search-form'),
  inputEl: document.querySelector('.search-form__input'),
  buttonEl: document.querySelector('.search-form__button'),
  galleryEl: document.querySelector('.gallery'),
  buttonLoad: document.querySelector('.load-more'),
};


const newsApiServise = new newsApiServise();
let totalPages = null;
refs.formEl.addEventListener('submit', onSubmit);
refs.buttonLoad.addEventListener('click', onLoadMore);



function onSubmit(e) {
  e.preverentDefault();
  newsApiServise.form = e.currentTarget;
  newsApiServise.form = e.currentTarget.elements.searchQuery.value.trim();
}