import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  finalData: any;

  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: Router, public service: DataService) {}

  ngOnInit(): void {
    this.service.saveData().subscribe((data) => {
      this.finalData = data;
      const ELEMENT_DATA: PeriodicElement[] = this.finalData;
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  toDetails(id) {
    this.route.navigateByUrl('data/details/' + id);
  }
}
