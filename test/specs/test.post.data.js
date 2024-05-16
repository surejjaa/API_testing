import requestsPage from '../pageobjects/requests.page.js'

describe('API regression test for posting an author', () => {   
    it('makes a POST request', async () => {
        const data = await requestsPage.data;
        const response = await requestsPage.postRequest(requestsPage.url, data);
        await expect(response.status).toEqual(requestsPage.status);
        await expect(response.data).toEqual(data);
    });
})