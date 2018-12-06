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

    create(body: any, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'products/create'}`, body, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    uploadImage(from_data: any, productId: string, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'products/' + productId + '/upload_image'}`, from_data, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    searchByCategroy(categroy: string) {
        return this.http.get(`${environment.baseUrl + 'products/search/category/' + categroy}`)
        .pipe(map(products => {
            return products;
        }));
    }

    searchBySubCategroy(sub_categroy: string) {
        return this.http.get(`${environment.baseUrl + 'products/search/sub_category/' + sub_categroy}`)
        .pipe(map(products => {
            return products;
        }));
    }
}
