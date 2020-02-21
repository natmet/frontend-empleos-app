import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IEmpleo } from './model/empleos.model';
import { createRequestOption } from './util/request-util';
import { SERVER_API_URL } from './app.constans';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  resourceUrl = `${SERVER_API_URL}api/empleos`;


  constructor(private http: HttpClient) { }

  findAll(req?: any): Observable<HttpResponse<IEmpleo[]>> {
    const params = createRequestOption(req);
    return this.http.get<IEmpleo[]>(this.resourceUrl, { params, observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<IEmpleo>> {
    return this.http.get<IEmpleo>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  save(empleo: IEmpleo): Observable<HttpResponse<IEmpleo>> {
    return this.http.post<IEmpleo>(`${this.resourceUrl}`, empleo, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<void>> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }


}
