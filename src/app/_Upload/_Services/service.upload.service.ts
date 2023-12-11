
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceUploadService {

  url : string = "https://localhost:44375/api/File";

  constructor(
    private _client : HttpClient
  ) { }

  upload(fileToUpload : File) : Observable<string> {
    let formData : FormData = new FormData()
    formData.append('myfile', fileToUpload, fileToUpload.name)
    return this._client.post(this.url, formData, {responseType : 'text'})
  }}
