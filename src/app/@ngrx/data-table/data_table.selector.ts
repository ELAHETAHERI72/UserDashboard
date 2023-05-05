import { isNgTemplate } from "@angular/compiler";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DataTableState } from "src/app/models/data_table.model";
import { dataTableFeatureKey } from "./data-table.reducer";

export const selectDataTableSelecte = createFeatureSelector<DataTableState>(
    dataTableFeatureKey
);

export const selectTableData = createSelector(selectDataTableSelecte, (state: DataTableState) => state.tableData);

export const selectFilterQuery = createSelector(selectDataTableSelecte, (state: DataTableState) => state.filterQuery);
export const selectFilterBy = createSelector(selectDataTableSelecte, (state: DataTableState) => state.filterBy);
export const selectGender = createSelector(selectDataTableSelecte, (state: DataTableState) => state.genderFilter);
export const selectAge = createSelector(selectDataTableSelecte, (state: DataTableState) => state.age);
export const selectRange = createSelector(selectDataTableSelecte, (state: DataTableState) => state.range);
export const selectEyeColors = createSelector(selectDataTableSelecte, (state: DataTableState) => state.eyeColors);
export const selectStartDate = createSelector(selectDataTableSelecte, (state: DataTableState) => state.startDate);
export const selectEndDate = createSelector(selectDataTableSelecte, (state: DataTableState) => state.endDate);

export const selecAll = createSelector(
    selectTableData,
    selectFilterQuery,
    selectFilterBy,
    selectGender,
    selectAge,
    selectRange,
    selectEyeColors,
    selectStartDate,
    selectEndDate,
    (dataTable, query, filterBy, genderFilter, age, range, eyecolors, startDate, endDate) => {

        let filterData = [...dataTable]

        if (query !== '') {
            filterData = filterData.filter((item) => {
                const result = filterBy.map((filterBy) => {
                    return item[filterBy]?.toLowerCase().includes(query)
                }).some((item) => item);

                return result
            })
        }

        if (genderFilter.length > 0) {
            filterData = filterData.filter((item) => {
                const result = genderFilter.map((filterBy) => {
                    return item['gender'] == filterBy;
                }).some((item) => item);

                return result
            })
        }

        if (age && range) {

            filterData = filterData.filter((item) => {
                let result;
                if (range == 'equal') {
                    result = item['age'] == age;
                }

                else if (range == 'greater') {
                    result = item['age'] >= age;
                }

                else if (range == 'smaller') {
                    result = item['age'] <= age;
                }
                return result
            })

        }

        if (eyecolors) {

            if (eyecolors.length > 0) {

                filterData = filterData.filter((item) => {
                    const result = eyecolors.map((eyeColor) => {
                        return item['eyeColor'] == eyeColor;
                    }).some((item) => item);

                    return result
                })
            }
        }

        if (startDate || endDate) {
            filterData = filterData.filter((item) => {
                return item['birthDate'] > startDate && item['birthDate'] < endDate
            })
        } else {
            return filterData
        }

        return filterData
    })


