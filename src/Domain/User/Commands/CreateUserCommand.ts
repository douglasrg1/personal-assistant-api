class CreateUserCommand implements ICommand{
    UserName: string;
    Email: string;

    constructor(userName: string, email: string){
        this.UserName = userName;
        this.Email = email;
    }
}