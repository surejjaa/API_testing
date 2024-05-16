import requestsPage from '../pageobjects/requests.page.js'
import randomPage from '../pageobjects/random.page.js';

describe('API regression test for deleting an author', () => {   
    it('makes a DELETE request', async () => {
        const randomId = await randomPage.getRandomId();
        const response = await requestsPage.deleteRequest(randomId);
        await expect(response.status).toEqual(requestsPage.status);
    }); 
})