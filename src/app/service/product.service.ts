import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

@Injectable()
export class ProductService {
    constructor(
        private http: HttpClient
    ) {}

    searchByKey(searchKey: string) {
        return this.http.get(`${environment.baseUrl + 'products/search/title/' + searchKey}`)
        .pipe(map(products => {
            return products;
        }));
    }
}
