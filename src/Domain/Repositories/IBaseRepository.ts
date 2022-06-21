interface IBaseRepository<T>{
    Insert(entity: T) : T;
    Update(entity: T): T;
    Get(id: number): T;
    Remove(id: number): boolean;
    GetAll(): T[];
}