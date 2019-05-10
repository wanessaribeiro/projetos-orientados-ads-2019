import { Cliente } from '../shared/Cliente';
import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ClienteApiService {
  private BASE_URL: string = "http://localhost:8088/app-pagando-a-conta";
  private apiUrl = `${this.BASE_URL}/cliente`;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl).pipe(
      catchError(this.handleError('getClientes', [])
    ));
  }

  addCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.apiUrl, cliente, httpOptions).pipe(
      catchError(this.handleError('addCliente'))
    );
  }

  updateCliente(id: number, cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.put(url, cliente, httpOptions).pipe(
      catchError(this.handleError<any>('updateCliente'))
    );
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Cliente>(url, httpOptions).pipe(
      catchError(this.handleError<Cliente>('deleteCliente'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}