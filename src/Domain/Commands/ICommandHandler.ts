interface ICommandHandler<T> {

    Handler(command: T) : ICommandResult
}