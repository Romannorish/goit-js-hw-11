import axios from 'axios';

export default class NewsApiService {
    constructor() {
       this.searchQuery = '';
       
       this.page = 1;
    }

    async  fetchImage() {
    
        const BASE_URL = `https://pixabay.com/api/`;
        const API_KEY = `30077711-4b113b89ab0e54a97a0c4d035`;
    
        try {
            const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`);
            const data = response.data.hits;
            console.log(data);
           
            return response.data;
            
        } catch (error) {
            console.error(error);
        }   
    }

    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query (newQuery) {
        this.searchQuery = newQuery;
    }

}
