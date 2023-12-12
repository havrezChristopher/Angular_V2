
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ServiceUploadService {
  private API_URL = environment.API_URL;

  constructor(
    private _http : HttpClient
  ) { }

  upload(fileToUpload : File) : Observable<string> {
    let formData : FormData = new FormData()
    formData.append('myfile', fileToUpload, fileToUpload.name)
    return this._http.post(this.API_URL, formData, {responseType : 'text'})
  }}
