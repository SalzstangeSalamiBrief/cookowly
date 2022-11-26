using Cookowly.Application.Contracts;
using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class CreateDishUseCase : IUseCase<AddDishRequest, AddDishResponse>
{
    private readonly IRepository<Dish> _dishRespository;

    public CreateDishUseCase(IRepository<Dish> dishRespository)
    {
        _dishRespository = dishRespository;
    }

    public async Task<AddDishResponse> Handle(AddDishRequest request, CancellationToken cancellationToken = default)
    {
        var dishToCreate = request.Adapt<Dish>();
        dishToCreate.Id = Guid.NewGuid();
        dishToCreate.Created = DateTime.UtcNow;
        dishToCreate.CreatedBy = "";
        dishToCreate.Modified = DateTime.UtcNow;
        dishToCreate.ModifiedBy = "";

        var createdDish = await _dishRespository.Create(dishToCreate, cancellationToken);
        return createdDish.Adapt<AddDishResponse>();
    }
}
