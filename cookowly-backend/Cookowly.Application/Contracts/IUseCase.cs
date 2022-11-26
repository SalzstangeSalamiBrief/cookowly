namespace Cookowly.Application.Contracts;

internal interface IUseCase<TId, TRequest, TResponse>
{
    Task<TResponse> Handle(TId id, TRequest request, CancellationToken cancellationToken = default);
}

internal interface IUseCase<TRequestOrId, TResponse> 
{
    Task<TResponse> Handle(TRequestOrId requestOrId, CancellationToken cancellationToken = default);
}

internal interface IUseCase<TResponse>
{
    Task<TResponse> Handle(CancellationToken cancellationToken = default);
}
