import randomPage from '../pageobjects/random.page.js';
import requestsPage from '../pageobjects/requests.page.js'

describe('API regression test for fetching non-existent author', () => {   
    it('makes a GET request', async () => {
        const randomId = await randomPage.getRandomIntFromRange(600, 999);
        const url = await requestsPage.buildUrl(randomId);
        const response = await requestsPage.getRequest(url);
        await requestsPage.matchingData(response.status, requestsPage.failedStatus);
    });
})