namespace Cookowly.Application.Contracts;

internal interface IQueryableUseCase<TResponse>
    where TResponse : IDataTransferObject
{
    IQueryable<TResponse> Handle();
}

internal interface IGetByIdUseCase<TResponse>
    where TResponse : IDataTransferObject
{
    Task<TResponse> Handle(Guid id, CancellationToken cancellationToken = default);
}

internal interface ICreateUseCase<TRequest, TResponse>
    where TRequest : IDataTransferObject
    where TResponse : IDataTransferObject
{
    Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken = default);
}

internal interface IUpdateUseCase<TRequest, TResponse>
    where TRequest : IDataTransferObject
    where TResponse : IDataTransferObject
{
    Task<TResponse> Handle(Guid id, TRequest request, CancellationToken cancellationToken = default);
}

internal interface IDeleteUseCase
{
    Task Handle(Guid id, CancellationToken cancellationToken = default);
}
