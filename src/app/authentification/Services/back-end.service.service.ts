import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, pipe, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

 // mettre dans une variable d environnements et mettre le lien de API 
 private backEndUrl: string = environment.API_URL;
 // pour lui dire que 
 // environment = environment.production ? this.backEndUrl ='.. ' ? this.backEndUrl = environment.API_URL

 constructor(private http: HttpClient, private cookieServices: CookieService) { }
 //*ici le services qui va etre lier a la fonction connection 
 sigin(login: string, password: string): Observable<any> {

   const data = { login, password };
   return this.http.post(`${this.backEndUrl}/auth/login`, data)
     .pipe(
       // si la requete est réussie on va stoker le token utilisateur dans un cookie
       tap((response: any) => {
         // On utilise tab et il dois attendre une reponse de type any

         if (response.token) {// si dans la response il y a un token
           this.cookieServices.set('authToken', response.token);// alors on va chercher cookiesServ on le set et on crée un object authToken 
           //ou jwt et sa sera le token contenut dans la reponse !
         }
       })

     );
 };
// Methode de Déconnection lier a la fonction du component (création de compte (register))  
 sigup(login: string, password: string): Observable<any> {
   const data = { login, password };
   const headers = new HttpHeaders({
     'content-type': 'application/json'
   });

     const option={headers : headers}

     return this.http.post(`${this.backEndUrl}auth/register`,data,option)

 };
}
