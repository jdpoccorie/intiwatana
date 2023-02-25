import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationDataSource } from './configuration.datasource';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  generarCaptcha(): Observable<String>{
    return this.http.get<String>(ConfigurationDataSource.getInstance().baseUrl + `api/motor-reservas/generar-captcha`,
        {headers: ConfigurationDataSource.getInstance().getConfHeaders()});
    }


}
