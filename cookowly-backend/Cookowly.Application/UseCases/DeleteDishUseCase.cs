using Cookowly.Application.Contracts.Repositories;

namespace Cookowly.Application.UseCases;

public class DeleteDishUseCase
{
    private readonly IDishRepository _dishRepository;

    public DeleteDishUseCase(IDishRepository dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public async Task Handle(Guid id, CancellationToken cancellationToken = default)
    {
        await _dishRepository.Delete(id, cancellationToken);
    }
}
