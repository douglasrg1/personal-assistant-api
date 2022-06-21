class UserAppService implements IUserAppService{

    private _createUserHandler: UserHandler;

    constructor(createUserHandler: UserHandler){
        this._createUserHandler = createUserHandler;
    }

    Create(command: CreateUserCommand): ICommandResult {
        var result = this._createUserHandler.Handler(command);

        return result;
    }

}