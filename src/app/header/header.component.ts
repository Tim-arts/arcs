import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './../homepage/homepage.component.scss',
        './header.component.scss'
    ]
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
