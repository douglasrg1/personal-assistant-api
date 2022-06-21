interface ICommandResult{
    
}

class CommandResult implements ICommandResult{
    Code: string;
    Message: string;
    Data: any;

    constructor(code: string, message: string, data: any){
        this.Code = code;
        this.Message = message;
        this.Data = data;
    }
}