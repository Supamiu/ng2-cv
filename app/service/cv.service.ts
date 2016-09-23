import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {CV} from "../model/cv.model";


@Injectable()
export class CVService {

    constructor(private http: Http) {
    }

    /**
     * Charge le cv en async.
     * @returns {Observable<Response>}
     */
    public getCV(): Observable<CV> {
        return this.http.get("input/cv.json").map(response => <CV>response.json());
    }
}