import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, startWith } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    constructor(private http: HttpClient) { }

    getAllUsers() {
        return this.http.get('https://dummyjson.com/users').pipe(
            map((item: any) => { return [...item['users']] }),
        )
    }
}