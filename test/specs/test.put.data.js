import requestsPage from '../pageobjects/requests.page.js'
import randomPage from '../pageobjects/random.page.js';

describe('API regression test for updating an author', () => {   
    it('makes a PUT request', async () => {
        const randomId = await randomPage.getRandomId();
        const data = await requestsPage.data;
        const response = await requestsPage.putRequest(randomId, data);
        await expect(response.status).toEqual(requestsPage.status);
        await expect(response.data).toEqual(data);
    });    
})