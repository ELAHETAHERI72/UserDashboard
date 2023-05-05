import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataTableState } from 'src/app/models/data_table.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];



  genderForm: FormGroup = this.fb.group({
    male: false,
    female: false,
    others: false,
  });

  showFiller = false;

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  constructor(private fb: FormBuilder, private store: Store<DataTableState>) { }


  ageFilter(age: string) {



  }

  genders: string[] = [];
  genderFiltering(event: any, gender: string) {

    this.genders?.push(gender);

    // this.store.dispatch(filterGender({ filters: { genders: this.genders } }));

  }
}
