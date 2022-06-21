interface IUserAppService{
    Create(command: CreateUserCommand): ICommandResult;
}