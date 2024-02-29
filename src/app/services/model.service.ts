import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model } from '../models/model.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  getModels(): Observable<Array<Model>> {
    return this.http.get<Array<Model>>(`${this.apiUrl}/models`);
  }
}
