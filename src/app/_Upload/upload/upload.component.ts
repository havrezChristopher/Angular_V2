import { Component } from '@angular/core';
import { ServiceUploadService } from '../_Services/service.upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  myFile? : File
  url : string = ""

  constructor(
    private _UpService : ServiceUploadService
  ) { }

  ngOnInit(): void {
  }

  loadFile(e : any) {
    this.myFile = e.target.files[0]
  }

  startUpload() {
    if(this.myFile) this._UpService.upload(this.myFile).subscribe((url : string) => {
      this.url = url
    })
  }
}
