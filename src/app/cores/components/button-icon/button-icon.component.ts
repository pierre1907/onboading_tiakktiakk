import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.css'
})
export class ButtonIconComponent implements OnInit{
  @Input() buttons = [
    {
      label: '',
      icon:'',
      color:''
    }
  ];

  constructor() { }


  ngOnInit(): void {
  }

}
