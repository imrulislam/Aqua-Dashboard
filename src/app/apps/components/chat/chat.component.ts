import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements AfterViewInit {
    @ViewChild('chatContent') chatContent: ElementRef;
    @ViewChild('contactList') contactList: ElementRef;

    constructor() { }

    ngAfterViewInit() {
        const ps = new PerfectScrollbar(this.chatContent.nativeElement, {suppressScrollX: true, maxScrollbarLength: 200});
        const ps2 = new PerfectScrollbar(this.contactList.nativeElement, {suppressScrollX: true, maxScrollbarLength: 200});
    }
}
