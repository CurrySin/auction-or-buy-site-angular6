import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient
    ) {}

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.baseUrl + 'user/login'}`, { username: username, password: password})
        .pipe(map(user => {
            if (user) {
                localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
                localStorage.setItem('refreshToken', JSON.stringify(user.refreshToken));
            }

            return user;
        }));
    }

    logout() {
        return new Promise((res, rej) => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            res(true);
        });
    }

    register(body: any) {
        return this.http.post<any>(`${environment.baseUrl + 'user/signup'}`, body)
        .pipe(map(result => {
            return result;
        }));
    }

    verify(username: string, verification_code: string) {
        return this.http.post<any>(`${environment.baseUrl + 'user/' + username + '/verify'}`, { verification_code: verification_code })
        .pipe(map(result => {
            return result;
        }));
    }

    forgotPassword(username: string) {
        return this.http.post<any>(`${environment.baseUrl + 'user/' + username + '/forgot_password'}`, {})
        .pipe(map(result => {
            return result;
        }));
    }

    renewPassword(username: string, verificationCode: string, newPassword: string) {
        return this.http.post<any>(`${environment.baseUrl + 'user/' + username + '/forgot_password/renew'}`,
        {
            verificationCode: verificationCode,
            newPassword: newPassword
        })
        .pipe(map(result => {
            return result;
        }));
    }

    getUser(username: string, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.get<any>(`${environment.baseUrl + 'user/' + username}`, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    updateUser(username: string, body: any, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'user/' + username}`, body, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    chagnePassword(username: string, body: any, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'user/' + username + '/change_password'}`, body, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    addBalance(username: string, value: string, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'user/' + username + '/add_balance'}`, { value: value}, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    receiveMail(username: string, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'mail/receive/' + username}`, {}, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }

    getMailById(mailId: string, token: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'token': JSON.parse(token)
        })};
        return this.http.post<any>(`${environment.baseUrl + 'mail/' + mailId}`, {}, httpOptions)
        .pipe(map(result => {
            return result;
        }));
    }
}
