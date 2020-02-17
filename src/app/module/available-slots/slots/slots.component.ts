import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { ConstantService } from 'src/app/service/constant';
import { CommonService } from 'src/app/service/common-service';
import { Slot } from 'src/app/model/model';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  spinner = false;
  availableSlots: Slot[];
  gridColumns = [];
  pagination = true;
  sorting = true;
  pageLinks = 5;
  bookSlotflag = false;
  constructor(
    private api: Service,
    private url: UrlConfig,
    private userConstant: ConstantService,
    public common: CommonService
  ) { }

  public getDestination() {
    this.generateGridColumn();
    this.spinner = true;
    this.api.getList(this.url.urlConfig().availableSlots)
      .subscribe(slots => {
        this.spinner = false;
        if (slots) {
          this.availableSlots = slots;
        }
      }, error => {
        this.spinner = false;
      });
  }
  /* configure the grid columns */
  private generateGridColumn(): void {
    this.gridColumns = [
      {
        colName: 'Plan Name',
        rowName: 'planName',
      }, {
        colName: 'Date',
        rowName: 'date',
      }, {
        colName: 'From Time',
        rowName: 'fromTime',
      }, {
        colName: 'To Time',
        rowName: 'toTime',
      },
      {
        colName: 'Amount',
        rowName: 'totalCost',
      },
      {
        colName: 'Action',
        action: [{ btnName: 'Book', btnClass: '' }],
      }
    ];
  }

  /* Modal Action */
  public modalAction(action: string): void {
    if (action === 'Ok') {
      this.common.alertConfigDefaultValue();
    }
  }

  /* Get action from grid */
  public getAction(event) {
    if (event.gridAction.action === 'Book') {
      this.bookSlotflag = true;
    }
  }
  ngOnInit() {
    this.getDestination();
  }

}
