using Cookowly.Application.Contracts;
using Cookowly.Domain.Entities;

namespace Cookowly.Application.UseCases;

public class DeleteDishUseCase : IUseCase<Guid, Guid>
{
    private readonly IRepository<Dish> _dishRespository;

    public DeleteDishUseCase(IRepository<Dish> dishRespository)
    {
        _dishRespository = dishRespository;
    }

    public async Task<Guid> Handle(Guid id, CancellationToken cancellationToken = default)
    {
        await _dishRespository.Delete(id, cancellationToken);
        return id;
    }
}
