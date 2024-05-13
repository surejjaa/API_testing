import { browser } from '@wdio/globals'

export default class Page {
    /**
    @param path 
    */
    open (path) {
        return browser.url(`https://fakerestapi.azurewebsites.net/api/v1/Authors${path}`)
    }
}
