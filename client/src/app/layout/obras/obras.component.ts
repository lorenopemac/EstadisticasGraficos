import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-obras',
    templateUrl: './obras.component.html',
    styleUrls: ['./obras.component.scss']
})
export class ObrasComponent implements OnInit {

    constructor(
    ) {}

    ngOnInit(): void {
    }

}
