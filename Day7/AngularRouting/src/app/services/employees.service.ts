import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class EmployeesService {
    private url: string;
    private empToEdit: any;

    constructor(private httpClient: HttpClient) {
        this.url = "http://localhost:51680/api/employee/";
    }

    set Employee(value: any) {
        this.empToEdit = { ...value };
    }

    get Employee() {
        return this.empToEdit;
    }

    getAllEmployees() {
        return this.httpClient.get<Array<any>>(`${this.url}GetAllEmployees`).pipe(
            retry(3),
            catchError(this.handleError<any>('getAllEmployees'))
        );
    }

    saveEmployee(employee: any) {
        console.log(employee);
        return this.httpClient.post(`${this.url}SaveEmployee`, employee).pipe(
            retry(3),
            catchError(this.handleError<any>('saveEmployee'))
        );
    }

    deleteEmployee(employee: any) {
        console.log(employee);
        return this.httpClient.post(`${this.url}DeleteEmployee`, employee).pipe(
            retry(3),
            catchError(this.handleError<any>('deleteEmployee'))
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