import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-file-manager',
    templateUrl: './file-manager.component.html',
    styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

    showToolBarGroupBtn = false;
    selectedIndex = -1;

    @HostListener('document:click', ['$event']) onDocumentClick(event) {
        this.showToolBarGroupBtn = false;
        this.selectedIndex = -1;
      }
    constructor() { }

    ngOnInit() {
    }


    fileSelect(event, index: number) {
        event.stopPropagation();
        this.selectedIndex = index;
        this.showToolBarGroupBtn = true;
    }
}
