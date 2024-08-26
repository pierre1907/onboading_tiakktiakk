import {ChangeDetectorRef, Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";
import {NavMenuService} from "../../services/nav-menu.service";
import {environment} from "../../../../environnement/environements";
import {MatDialog} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarRow,
    MatMenu,
    MatMenuTrigger,
    MatToolbar
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Input() title = '';

  @Input() loggedIn = false;

  home = environment.home;

  @Input() demandeMenu = true;

  @Output() onSidebarToggle = new EventEmitter<void>();

  name = '';
  prenom = '';

  role = '';

  adminRoles = ['ADMIN', 'SUPPORT' ];

  constructor(
    private navMenuService: NavMenuService,
    private router: Router,
    private localStorage: LocalStorageService,
    private changeDetectorRef: ChangeDetectorRef,
    private dialog: MatDialog,
  ) {
    this.name = this.localStorage.getItem('nom');
    this.prenom = this.localStorage.getItem('prenom');
    this.role = this.localStorage.getItem('role');
  }

  ngOnInit() {
  }

  logOut(){
    this.localStorage.clear();
    this.router.navigate(['/user'])
  }

  logIn(){
    this.router.navigate(['/users/login'])
  }

  clickLogo(){
    this.router.navigate(['/'])
  }

  myProfil() {
    const userId = localStorage.getItem('id');
    //this.router.navigate(['/monProfil',userId])

    console.log('oui click sur le profil')
  }

  toggleSidebar() {
    this.onSidebarToggle.emit();
  }

  openModal()  {
    /*const dialogRef = this.dialog.open(UpdatePasswordFormComponent, {
      data: {},
      width: '50%',
      height: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (Boolean(result)) {
        this.logOut();
      }
    });*/
    console.log('click sur le bouton pour modifier le mot de passe')
  }


}
