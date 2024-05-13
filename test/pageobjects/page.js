import { browser } from '@wdio/globals'
import randomPage from './random.page.js';

export default class Page {
    constructor() {
        this.status = 200;
        this.url = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';
        this.data = this.generateData();
    }

    /**
    @param path 
    */
    open (path) {
        return browser.url(`https://fakerestapi.azurewebsites.net/api/v1/Authors${path}`)
    }
    
    async generateData(){
        const id = await randomPage.getRandomId();
        const idBook = await randomPage.getRandomId();
        const firstName = await randomPage.generateFirstname();
        const lastName = await randomPage.generateLastname();
        return { "id": id, "idBook": idBook, "firstName": firstName, "lastName": lastName };
    }

    async buildUrl(id){
        return(`${this.url}/${id}`);
    }
}
