import { RESTDataSource } from 'apollo-datasource-rest';

export class F1 extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.jolpi.ca/ergast.com/api/f1/';
    }
}
