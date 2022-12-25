using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class CreateDishUseCase
{
    private readonly IDishRepository _dishRespository;
    private readonly IExecutionTimeAccessor _executionTimeAccessor;
    private readonly IRequestUserAccessor _requestUserAccessor;

    public CreateDishUseCase(IDishRepository dishRespository,
        IExecutionTimeAccessor executionTimeAccessor,
        IRequestUserAccessor requestUserAccessor)
    {
        _dishRespository = dishRespository;
        _executionTimeAccessor = executionTimeAccessor;
        _requestUserAccessor = requestUserAccessor;
    }

    public async Task<CreateDishResponse> Handle(CreateDishRequest request, CancellationToken cancellationToken = default)
    {
        var dish = new Dish
        {
            Id = Guid.NewGuid(),
            Title = request.Title,
            Description = request.Description,
            Created = _executionTimeAccessor.ExecutionTime,
            CreatedById = _requestUserAccessor.Id,
            Modified = _executionTimeAccessor.ExecutionTime,
            ModifiedById = _requestUserAccessor.Id
        };

        var createdDish = await _dishRespository.Create(dish, cancellationToken);
        return createdDish.Adapt<CreateDishResponse>();
    }
}
