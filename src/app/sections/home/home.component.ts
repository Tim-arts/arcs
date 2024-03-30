import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
      './../../homepage/homepage.component.scss',
      './home.component.scss'
  ]
})
export class HomeComponent implements OnInit {
    scrolled: Boolean = false;

  constructor() {}

    @HostListener("window:scroll", ["$event"])
    onWindowScroll($event) {
        this.scrolled = $event.currentTarget.scrollY >= 150;
    }

  ngOnInit(): void {}

}
