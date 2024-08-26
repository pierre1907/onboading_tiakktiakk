import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {NavMenuService} from "../../services/nav-menu.service";
import {Actions} from "../../model/user/actions";
import {LocalStorageService} from "../../services/local-storage.service";
import {HeaderComponent} from "../header/header.component";
import {MatDrawer, MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatNavList} from "@angular/material/list";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    HeaderComponent,
    MatDrawer,
    MatDrawerContainer,
    MatIconModule,
    MatDivider,
    RouterOutlet,
    MatNavList,
    MatSidenavModule,
    CommonModule

  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit, AfterViewInit {

  title =  '';
  @Input() loggedIn = false;

  //currentPage;
  nom= '';
  prenom= '';
  sideBarOpen = true;
  //actions: Actions[];

  roles: string[] = ['ADMIN', 'SUPPORT'];
  role:string ;
  serviceId: number;
  isAdmin: boolean;

  constructor(
    private navMenuService: NavMenuService,
    //private userService: UserService,
    public router: Router,
    private localStorage: LocalStorageService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.nom = this.localStorage.getItem('nom');
    this.prenom = this.localStorage.getItem('prenom');
    this.role = this.localStorage.getItem('role');
    this.serviceId = Number(this.localStorage.getItem('serviceId'));
    this.isAdmin = this.roles.includes(this.role);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.navMenuService.sidebarToggled.subscribe((data) => {
      this.sideBarOpen = data;
    });
    this.navMenuService.currentTitle.subscribe((data) => {
      this.title = data;
    })
  }

  toggleSidebar() {
    this.sideBarOpen = !this.sideBarOpen;
    this.navMenuService.toggleSidenav(this.sideBarOpen);
  }

  /*private getListActions(){
    this.userService.getActions(this.userId).subscribe({
      next: (data) => {
        this.actions = data;
      },
      error: (error) => {console.log(error)}
    })
  }

  canDo(action: string){
    return this.actions?.find(act => act.code === action) !== undefined;
  }*/
  protected readonly name = name;
}
