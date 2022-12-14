using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class UpdateDishUseCase
{
    private readonly IDishRepository _dishRepository;
    private readonly IExecutionTimeAccessor _executionTimeAccessor;
    private readonly IRequestUserAccessor _requestUserAccessor;

    public UpdateDishUseCase(IDishRepository dishRepository,
        IExecutionTimeAccessor executionTimeAccessor,
        IRequestUserAccessor requestUserAccessor)
    {
        _dishRepository = dishRepository;
        _executionTimeAccessor = executionTimeAccessor;
        _requestUserAccessor = requestUserAccessor;
    }

    public async Task<UpdateDishResponse> Handle(Guid id, UpdateDishRequest request,
        CancellationToken cancellationToken = default)
    {
        var dishToUpdate = await _dishRepository.FirstOrDefault(dish => dish.Id == id, cancellationToken);
        if (dishToUpdate is null)
        {
            throw new EntityNotFoundException(typeof(Dish), id);
        }

        dishToUpdate.Title = request.Title;
        dishToUpdate.Description = request.Description;
        dishToUpdate.ModifiedById = _requestUserAccessor.Id;
        dishToUpdate.Modified = _executionTimeAccessor.ExecutionTime;
        return dishToUpdate.Adapt<UpdateDishResponse>();
    }
}
