import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import randomPage from '../pageobjects/random.page.js';

describe('API smoke test for demo application', () => {
    afterAll(() => {
        requestsPage.data = null;
    });
    
    it('makes a GET request for authors', async () => {
        const response = await requestsPage.getRequest(requestsPage.url);
        await expect(response.status).toEqual(requestsPage.status);
    });

    it('makes a POST request for an author', async () => {
        const data = await requestsPage.data;
        const response = await requestsPage.postRequest(requestsPage.url, data);
        await expect(response.status).toEqual(requestsPage.status);
        await expect(response.data).toEqual(data);
    });

    it('makes a PUT request for an author', async () => {
        const randomId = await randomPage.getRandomId();
        const data = await requestsPage.data;
        const response = await requestsPage.putRequest(randomId, data);
        await expect(response.status).toEqual(requestsPage.status);
        await expect(response.data).toEqual(data);
    });

    it('makes a DELETE request for an author', async () => {
        const randomId = await randomPage.getRandomId();
        const response = await requestsPage.deleteRequest(randomId);
        await expect(response.status).toEqual(requestsPage.status);
    });
})