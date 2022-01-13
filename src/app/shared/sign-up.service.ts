import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Structure} from '../models/str';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient) { }


  postData(regFormValues: Structure[]) {
    return this.http.post('https://alphabet-e52da-default-rtdb.asia-southeast1.firebasedatabase.app/signUp.json', regFormValues)
  }
  getData(): Observable<any> {
    return this.http.get<Structure[]>('https://alphabet-e52da-default-rtdb.asia-southeast1.firebasedatabase.app/signUp.json')
  }
}
