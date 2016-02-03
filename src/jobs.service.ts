import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobsService {
    constructor(public http: Http) {}
    getJobs() {
        return this.http.get('/app/jobs.json')
            .map((res: Response) => { return res.json(); }); //Returning an observable
    }
}