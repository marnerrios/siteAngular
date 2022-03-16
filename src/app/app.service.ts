import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class ConnectionService {
    url: string =  `${environment.api}/cadastroInteresse`;
    constructor(private http: HttpClient ) { }

    sendMessage(messageContent: any) {
       // console.log(messageContent);
        return this.http.post(this.url,
        JSON.stringify(messageContent),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
    }
}
