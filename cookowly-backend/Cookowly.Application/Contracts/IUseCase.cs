namespace Cookowly.Application.Contracts;

internal interface IQueryableUseCase<TResponse>
    where TResponse : IRequestOrResponse
{
    IQueryable<TResponse> Handle();
}

internal interface IGetByIdUseCase<TResponse>
    where TResponse : IRequestOrResponse
{
    Task<TResponse> Handle(Guid id, CancellationToken cancellationToken = default);
}

internal interface ICreateUseCase<TRequest, TResponse>
    where TRequest : IRequestOrResponse
    where TResponse : IRequestOrResponse
{
    Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken = default);
}

internal interface IUpdateUseCase<TRequest, TResponse>
    where TRequest : IRequestOrResponse
    where TResponse : IRequestOrResponse
{
    Task<TResponse> Handle(Guid id, TRequest request, CancellationToken cancellationToken = default);
}

internal interface IDeleteUseCase
{
    Task Handle(Guid id, CancellationToken cancellationToken = default);
}
