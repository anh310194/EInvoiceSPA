import { User } from "./User"

export class AuthModel {
    UserProfile!: User;
    Menu!: Array<MenuModel>;
    Language: string = 'En';
    Notifications: Array<NotificationModel> = [];
    Token!: string; 
}

export class MenuModel {
    ModuleName!: string;
    DisplayText!: string;
    Order!: number;
    Children!: Array<MenuModel>;
    Icon!: number;
    Controller!: string;
    ModuleLevel! : number;
}

export class NotificationModel {
    Name!: string;    
    Icon!: number;
}