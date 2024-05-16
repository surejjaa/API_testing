import requestsPage from '../pageobjects/requests.page.js'

describe('API regression test for fetching authors', () => {   
    it('makes a GET request', async () => {
        const response = await requestsPage.getRequest(requestsPage.url);
        // const data = await response.data;
        // const dataLength = data.length;
        //await requestsPage.matchingData(dataLength, requestsPage.dataLength);
        await requestsPage.matchingData(response.status, requestsPage.status);
    });
})