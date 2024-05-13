import { expect } from '@wdio/globals'
import requestsPage from '../pageobjects/requests.page.js'
import randomPage from '../pageobjects/random.page.js';

describe('API smoke test', () => {
    afterAll(() => {
        requestsPage.data = null;
    });
    
    it('should make a GET request and validate response', async () => {
        const response = await requestsPage.getRequest(requestsPage.url);
        await expect(response.status).toEqual(requestsPage.status);
    });

    it('should make a POST request and validate response', async () => {
        const response = await requestsPage.postRequest(requestsPage.url, requestsPage.data);
        await expect(response.status).toEqual(requestsPage.status);
        await expect(response.data).toEqual(requestsPage.data);
    });

    it('should make a PUT request and validate response', async () => {
        const randomId = await randomPage.getRandomId();
        const response = await requestsPage.putRequest(randomId, requestsPage.data);
        await expect(response.status).toEqual(requestsPage.status);
        await expect(response.data).toEqual(requestsPage.data);
    });

    it('should make a DELETE request and validate response', async () => {
        const randomId = await randomPage.getRandomId();
        const response = await requestsPage.deleteRequest(randomId);
        await expect(response.status).toEqual(requestsPage.status);
    });
})