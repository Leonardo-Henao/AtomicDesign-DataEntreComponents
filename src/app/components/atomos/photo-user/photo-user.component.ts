import { Component, Input } from '@angular/core';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'photo-user',
  templateUrl: './photo-user.component.html',
  styleUrls: ['./photo-user.component.scss']
})
export class PhotoUserComponent {

  @Input()
  srcPhotoUser?: string;
  // foto debug: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU

  verifyNoNullPhotoSrc() {
    const lengthPhotoPath = this.srcPhotoUser?.length;
    if (this.srcPhotoUser == null || lengthPhotoPath == 0) return true;
    else return false;
  }

}
