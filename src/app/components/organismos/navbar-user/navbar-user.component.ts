import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss']
})
export class NavbarUserComponent {

  @Input()
  srcPhotoUser?: string;

}
