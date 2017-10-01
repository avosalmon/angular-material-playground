import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: MdSidenav;

  navMode = 'side';

  navOpened = true;

  ngOnInit(): void {
    if (window.innerWidth < 768) {
      this.navMode   = 'over';
      this.navOpened = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
        this.navMode   = 'over';
        this.navOpened = false;
    } else {
      this.navMode   = 'side';
      this.navOpened = true;
    }
  }
}
