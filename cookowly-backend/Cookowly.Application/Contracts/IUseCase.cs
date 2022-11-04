namespace Cookowly.Application.Contracts;

internal interface IUseCase<TRequest, TResponse> 
{
    Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken = default);
}

internal interface IUseCase<TResponse>
{
    Task<TResponse> Handle(CancellationToken cancellationToken = default);
}
