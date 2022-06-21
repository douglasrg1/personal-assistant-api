class UserHandler implements ICommandHandler<CreateUserCommand>{

    private _userRepository: IUserRepository;

    constructor(userRepository: IUserRepository){
        this._userRepository = userRepository;
    }

    Handler(command: CreateUserCommand): ICommandResult {
        var newUser = new User(command.UserName, command.Email);
        
        try{
            const result = this._userRepository.Insert(newUser);
            // send email to create a new pass

            return new CommandResult("200", "usuario salvo com sucesso", result);
        }
        catch(e){
            return new CommandResult("401", "Erro ao salvar usuario", newUser);
        }
    }

}