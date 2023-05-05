import { Action, createReducer, on } from "@ngrx/store";
import { DataTableState } from "src/app/models/data_table.model";
import { resetData, setData, setFilterBy, setFilterByAgeRange, setFilterByDateRange, setFilterByEyeColor, setFilterByGender } from "./data_table.action";


export const dataTableFeatureKey = 'dataTable';
export const INITIALFILTERKEY = { filterkey: '', query: '' }


export const INTIAL_STATE: DataTableState = {
    tableData: [],
    filterQuery: '',
    filterBy: [],
    genderFilter: [],
    age: 0,
    range: '',
    eyeColors: [],
    startDate: '',
    endDate: ''

}

export const DataTAbleREducer = createReducer(
    INTIAL_STATE,
    on(setData, (state, { data }) => {
        return {
            ...state,
            tableData: data
        }
    }),

    on(resetData, (state) => {
        return {
            ...state,
            ...INTIAL_STATE,
        }
    }),

    on(setFilterBy, (state, { filters }) => {
        return {
            ...state,
            filterBy: filters.filterBy,
            filterQuery: filters.query
        }
    }),
    on(setFilterByGender, (state, { genderFilter }) => {
        return {
            ...state,
            genderFilter: genderFilter
        }
    }),

    on(setFilterByAgeRange, (state, { age, range }) => {
        return {
            ...state,
            age: age,
            range: range
        }
    }),

    on(setFilterByEyeColor, (state, { eyeColors }) => {
        return {
            ...state,
            eyeColors: eyeColors
        }
    }),

    on(setFilterByDateRange, (state, { startDate, endDate }) => {
        return {
            ...state,
            startDate: startDate,
            endDate: endDate
        }
    }),


)


export function DataTableReducer(state: DataTableState, action: Action) {
    return DataTAbleREducer(state, action)
}