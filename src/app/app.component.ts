import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setFilterBy, setFilterByAgeRange, setFilterByDateRange, setFilterByEyeColor, setFilterByGender } from './@ngrx/data-table/data_table.action';
import { DataTableState, tableData } from './models/data_table.model';
import { UserDataService } from './services/user-data.service';
import * as _moment from 'moment';


const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {

  data$!: Observable<tableData[]>;

  searchUser = new FormControl('');

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });


  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
  ageRanges = ['equal', 'greater', 'smaller'];

  eyecolorList = ['Green', 'Gray', 'Brown', 'Amber', 'Blue'];

  genders: any[] = [];
  eyeColors: any[] = [];
  selectRange = "";

  constructor(private dataService: UserDataService, private store: Store<DataTableState>, private fb: FormBuilder,) { }


  ngOnInit(): void {

    this.data$ = this.dataService.getAllUsers();

    this.searchUser.valueChanges.pipe().subscribe((querySearch) => {
      this.store.dispatch(setFilterBy({ filters: { filterBy: ['firstName', 'lastName'], query: querySearch?.toLowerCase() } }))
    })

  }


  ageFilter(age: string, range: string) {

    if (range) {
      this.store.dispatch(setFilterByAgeRange({ range: range, age: +age }));
    }

  }

  handleFillCheckBoxArray(event: any, array: string[]) {

    if (event.checked === true) {
      array = [...array, event.source.value]
    }
    else {
      array = array.filter(item => item != event.source.value)
    }

    return array
  }

  genderFiltering(event: any) {

    this.genders = this.handleFillCheckBoxArray(event, this.genders)
    this.store.dispatch(setFilterByGender({ genderFilter: this.genders }));

  }


  eyeCOlorFiltering(event: any) {

    this.eyeColors = this.handleFillCheckBoxArray(event, this.eyeColors);
    this.store.dispatch(setFilterByEyeColor({ eyeColors: this.eyeColors }));

  }

  dateRangeChange(start: any, end: any) {

    if (start && end) {
      const startDate = _moment(start.value).format('YYYY-MM-DD');
      const endDate = _moment(end.value).format('YYYY-MM-DD');
      this.store.dispatch(setFilterByDateRange({ startDate: startDate, endDate: endDate }))
    }

  }

}
