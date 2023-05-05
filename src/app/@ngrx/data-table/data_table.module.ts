import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

//NgRx
import { StoreModule } from '@ngrx/store';
import * as fromReducer from './data-table.reducer';


@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            fromReducer.dataTableFeatureKey,
            fromReducer.DataTAbleREducer
        )
    ],
})

export class DataTableModule { }