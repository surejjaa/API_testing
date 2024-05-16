import { browser, expect } from '@wdio/globals'
import randomPage from './random.page.js';

export default class Page {
    constructor() {
        this.status = 200;
        this.url = 'https://fakerestapi.azurewebsites.net/api/v1/Authors';
        this.data = this.generateData();
        this.failedStatus = 400;
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

    /**
    @param path 
    */
    open (path) {
        return browser.url(`https://fakerestapi.azurewebsites.net/api/v1/Authors${path}`)
    }

    async matchingData(response, providedData){
        await expect(response).toEqual(providedData);
    }

    async validatingObjectAttributes(data){
        data.forEach(author => {
            expect(author).toHaveProperty('id');
            expect(author).toHaveProperty('idBook');
            expect(author).toHaveProperty('firstName');
            expect(author).toHaveProperty('lastName');
        });
    }
}
