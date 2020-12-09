import { BaseTable } from '../_models/BaseTable';

export class TableReponse<T> extends BaseTable{
    TotalPage: number = 0;
    ListRows: Array<T> = [];
    constructor(){
        super();
    }
}