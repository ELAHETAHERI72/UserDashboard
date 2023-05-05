import { CommonModule } from "@angular/common";
import { EnvironmentInjector, NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { DataTableModule } from "./data-table/data_table.module";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({}, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        DataTableModule,
        StoreDevtoolsModule.instrument({
            maxAge: 10,
            // logOnly:enviroment.production,
            autoPause: true
        })
    ]
})

export class RootStoreModule { }