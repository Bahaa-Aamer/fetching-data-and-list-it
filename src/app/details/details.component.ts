import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  loading: boolean = true;
  eleId;
  allData: any;
  selectedEle;

  constructor(
    private service: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
    this.eleId = this.activatedRoute.snapshot.paramMap.get('id');

    this.service.saveData().subscribe((data) => {
      this.allData = data;
      this.selectedEle = this.allData.find((x) => (x.id = this.eleId));
    });
  }
}
