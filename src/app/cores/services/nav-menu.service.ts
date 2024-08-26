import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  private title = new BehaviorSubject<string>('');


  public currentTitle = this.title.asObservable();

  // Sidenav toggle
  private snToggle = new BehaviorSubject<boolean>(true);

  public sidebarToggled = this.snToggle.asObservable();

  constructor() {}

  updateTitle(newTitle: string = '') {
    this.title.next(newTitle);
  }

  toggleSidenav(state: boolean) {
    this.snToggle.next(state);
  }}
