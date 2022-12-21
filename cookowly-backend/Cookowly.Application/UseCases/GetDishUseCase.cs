using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class GetDishUseCase
{
    private readonly IDishRepository _dishRepository;

    public GetDishUseCase(IDishRepository dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public async Task<GetDishResponse> Handle(Guid id, CancellationToken cancellationToken = default)
    {
        var dish = await _dishRepository.FirstOrDefault(dish => dish.Id == id, cancellationToken);
        if (dish is null)
        {
            throw new EntityNotFoundException(typeof(Dish), id);
        }

        return dish.Adapt<GetDishResponse>();
    }
}
