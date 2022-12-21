using Cookowly.Application.Contracts.Repositories;

namespace Cookowly.Application.UseCases;

public class DeleteDishUseCase
{
    private readonly IDishRepository _dishRespository;

    public DeleteDishUseCase(IDishRepository dishRespository)
    {
        _dishRespository = dishRespository;
    }

    public async Task Handle(Guid id, CancellationToken cancellationToken = default)
    {
        await _dishRespository.Delete(id, cancellationToken);
    }
}
