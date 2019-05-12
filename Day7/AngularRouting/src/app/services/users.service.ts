import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class UsersService {
    private url: string;

    constructor(private httpClient: HttpClient) {
        this.url = "http://localhost:8000/api/users";
    }

    getAllUsers() {
        return this.httpClient.get<Array<any>>(this.url).pipe(
            retry(3),
            catchError(this.handleError<any>('getAllUsers'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {
            // If Error, log it
            console.log(`${operation} failed: ${error.message}`);

            // return result;
            return throwError('Connection Error, please try again later...');
        }
    }
}