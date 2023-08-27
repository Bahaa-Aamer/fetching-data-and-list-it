import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  loading: boolean = true;
  allData: any;
  selectedEle;

  constructor(
    private service: DataService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    let eleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.selectedEle = this.http
      .get('https://jsonplaceholder.typicode.com/posts/' + eleId)
      .subscribe((data) => {
        this.selectedEle = data;
      });
  }
}
