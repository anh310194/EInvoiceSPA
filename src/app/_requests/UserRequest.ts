import { BaseTable } from '../_models/BaseTable';

export class UserRequest extends BaseTable {
    constructor(){
        super();
    }

    FullName!: string;
}