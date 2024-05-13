import { $ } from '@wdio/globals'
import axios from "axios";
import Page from './page.js';

class RequestsPage extends Page {
    async getRequest(url){
        axios.get(`${url}`)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    async postRequest(url, data){
        axios.post(`${url}`, data)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    async putRequest(id, data){
        axios.put(`${this.url}/${id}`, data)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    async deleteRequest(id){
        axios.delete(`${this.url}/${id}`)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }

    open () {
        return super.open('');
    }
}

export default new RequestsPage();
