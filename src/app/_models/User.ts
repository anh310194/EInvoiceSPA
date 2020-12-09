export class User {
    UserName!: string;
    FullName!: string;
    Email!: string;
    Phone!: string;
    CellPhone!: string;
    Address!: string;
    roles!: [];
}

export class UserLogin {
    constructor() {
        this.UserName = '';
        this.Password = '';
        this.Remember = false;
        this.Language = 'EN';
    }
    UserName!: any;
    Password!: any;
    Remember!: any;
    Language!: any;
}