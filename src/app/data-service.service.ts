import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
   
  constructor(private _http:HttpClient) { }
  private extractData(res: Response) {
  let body = res;
  
  return body || { };
}
  GetPosts():Observable<any>{
   const endpoint = 'https://jsonplaceholder.typicode.com/posts?id=3';  
    const httpOptions  = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
  }
    return this._http.get(endpoint).pipe(
      map(this.extractData));
    
  }
  
 
  

}