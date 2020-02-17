import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { CommonService } from 'src/app/service/common-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html',
  styleUrls: ['./view-plan.component.css']
})
export class ViewPlanComponent implements OnInit {
  spinner = false;
  appointmentList = [];
  gridColumns = [];
  pagination = true;
  sorting = true;
  pageLinks = 5;
  selectedRow: any;
  bookingFlag = false;
  appointmentForm: FormGroup;
  submitted = false;

  constructor(
    private api: Service,
    private url: UrlConfig,
    public common: CommonService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getHospitalList();
  }

/* get list */
private getHospitalList(): void {
  this.spinner = true;
  this.generateGridColumn();
  // const param = `${id}/availabilities`;
  this.api.getList(this.url.urlConfig().users)
    .subscribe(hospital => {
      this.spinner = false;
      if (hospital) {
        this.appointmentList = hospital;
      }
    }, error => {
      this.spinner = false;
    });
}

/* configure the grid columns */
private generateGridColumn(): void {
  this.gridColumns = [
     {
      colName: 'Date',
      rowName: 'date',
    }, {
      colName: 'From Time',
      rowName: 'fromTime',
    },
     {
      colName: 'To Time',
      rowName: 'toTime',
    }, {
      colName: 'Total Cost',
      rowName: 'totalCost',
    }
  ];
}
addSlots = () => {
  this.bookingFlag = true;
}
}
