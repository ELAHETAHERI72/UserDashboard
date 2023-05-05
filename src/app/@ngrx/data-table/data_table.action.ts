import { createAction, props } from "@ngrx/store";

enum Actions {
    SET_Data_TABLE = '[Data Table] set Table Data',
    RESET_DATATABLE_STORE = '[Data Table] Reset Store',
    SET_FILTER_BY = '[Data Table] set filter by',
    SET_GENDER_FILTER = '[Data Table] set gender filter',
    SET_AgeRange_FILTER = '[Data Table] set age range filter',
    SET_EYECOLOR_FILTER = '[Data Table] set age eye color filter',
    SET_DATE_RANGE_FILTER = '[Data Table] set date rage filter',

}

export const setData = createAction(Actions.SET_Data_TABLE, props<{ data: any[] }>());
export const resetData = createAction(Actions.RESET_DATATABLE_STORE);

export const setFilterBy = createAction(Actions.SET_FILTER_BY, props<{ filters: { filterBy: string[], query: any } }>());

export const setFilterByGender = createAction(Actions.SET_GENDER_FILTER, props<{ genderFilter: string[] }>());

export const setFilterByAgeRange = createAction(Actions.SET_AgeRange_FILTER, props<{ range: string, age: number }>());

export const setFilterByEyeColor = createAction(Actions.SET_EYECOLOR_FILTER, props<{ eyeColors: string[] }>());
export const setFilterByDateRange = createAction(Actions.SET_DATE_RANGE_FILTER, props<{ startDate: string, endDate: string }>());