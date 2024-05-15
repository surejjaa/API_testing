import axios from "axios";
import Page from './page.js';

class RequestsPage extends Page {
    async getRequest(url){
        try {
            const response = await axios.get(`${url}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async postRequest(url, data){
        try {
            const response = await axios.post(`${url}`, data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async putRequest(id, data){
        try {
            const response = await axios.put(`${this.url}/${id}`, data);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async deleteRequest(id){
        try {
            const response = await axios.delete(`${this.url}/${id}`);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new RequestsPage();
