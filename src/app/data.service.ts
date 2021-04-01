import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public formValue = '';
  public data = [];
  private REST_API_SERVER = "https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92";

  constructor(private httpClient: HttpClient) { }

  public sendPostRequest(data) {
    return this.httpClient.post(this.REST_API_SERVER, data);
  }
}