import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from './model/table.model';

const ELEMENT_DATA: PeriodicElement[] = [
    { assigned: 'David Gusta', designation: 'Web Designer', project: 'Shared', priority: 'Low', budget: 37000 },
    { assigned: 'John Deo', designation: 'Project Manager', project: 'Digital Residence', priority: 'Medium', budget: 12122 },
    { assigned: 'Jonathan', designation: 'Developer', project: 'Gold Finger', priority: 'High', budget: 40000 },
    { assigned: 'Andrew Hall', designation: 'Business Analyst', project: 'Brown Suger', priority: 'High', budget: 70000 },
    { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
    { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
    { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
    { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
    { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
    { assigned: 'Jack Kallis', designation: 'Graphics Designer', project: 'Agency Design', priority: 'Medium', budget: 27000 },
];

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    displayedColumns: string[] = ['assigned', 'project', 'priority', 'budget'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor() { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
