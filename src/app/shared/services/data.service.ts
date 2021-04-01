import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public formValue = '';
  public data = [];
  private REST_API_SERVER = `${environment.api}?app_id=${environment.app_id}&app_key=${environment.app_key}`;

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(data) {
    return this.httpClient.post(this.REST_API_SERVER, data);
  }
}