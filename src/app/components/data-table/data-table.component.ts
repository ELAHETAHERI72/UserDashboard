import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { resetData, setData } from 'src/app/@ngrx/data-table/data_table.action';
import { selecAll } from 'src/app/@ngrx/data-table/data_table.selector';
import { DataTableState } from 'src/app/models/data_table.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, OnDestroy {

  @Input() data!: any[];

  public tableData$!: Observable<any>;

  constructor(private store: Store<DataTableState>) { }


  ngOnInit(): void {

    this.store.dispatch(setData({ data: this.data }));

    this.tableData$ = this.store.select(selecAll)
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetData())
  }
}
