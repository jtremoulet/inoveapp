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

  apiModel = `${this.apiUrl}/models`;

  getModels(): Observable<Array<Model>> {
    return this.http.get<Array<Model>>(this.apiModel);
  }

  createModel(model: Model): Observable<Model> {
    const body = {
      ...model,
      date: new Date()
    }
    return this.http.post<Model>(this.apiModel, body);
  }

  deleteModel(id: string): Observable<Model> {
    console.log(id)
    return this.http.delete<Model>(`${this.apiModel}/${id}`);
  }
}
