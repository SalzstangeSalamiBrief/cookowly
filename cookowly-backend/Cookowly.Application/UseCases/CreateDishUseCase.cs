using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class CreateDishUseCase
{
    private readonly IDishRepository _dishRespository;

    public CreateDishUseCase(IDishRepository dishRespository)
    {
        _dishRespository = dishRespository;
    }

    public async Task<CreateDishResponse> Handle(CreateDishRequest request, CancellationToken cancellationToken = default)
    {
        var dish = new Dish
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Description = request.Description,
            Created = DateTime.UtcNow,
            CreatedBy = "",
            Modified = DateTime.UtcNow,
            ModifiedBy = ""
        };

        var createdDish = await _dishRespository.Create(dish, cancellationToken);
        return createdDish.Adapt<CreateDishResponse>();
    }
}
