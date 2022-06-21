class User{
    UserName: string;
    Email: string;
    Password: string;
    IsActive: boolean;

    constructor(userName: string, email: string){
        this.UserName = userName;
        this.Email = email;
        this.Password = "";
        this.IsActive = false;
    }
}