import { Component } from '@angular/core';
import {CardComponent} from "../../../../cores/components/card/card.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
