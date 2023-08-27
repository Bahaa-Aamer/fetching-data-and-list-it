import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  saveData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}
