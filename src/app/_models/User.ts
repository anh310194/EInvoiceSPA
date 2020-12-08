export class User {
    UserName! : string;
    FullName! : string;
    Email! : string;
    Phone! : string;
    CellPhone! : string;
    Address! : string;
    Token! : string;
    roles! : [];
}

export class UserLogin{
    // constructor(){}
    constructor(){
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