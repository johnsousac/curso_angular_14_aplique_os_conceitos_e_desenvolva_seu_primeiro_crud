import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// configura a classe como injetavel, ou seja, que pode ser utilizada em outras classes
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  constructor(private http: HttpClient) { }
}
