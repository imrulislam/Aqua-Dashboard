import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-mailbox',
    templateUrl: './mailbox.component.html',
    styleUrls: ['./mailbox.component.scss']
})
export class MailBoxComponent implements OnInit {

    events: string[] = [];
    opened: boolean;

    constructor() { }

    ngOnInit() {
    }

}
