using Cookowly.Application.Contracts;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class GetDishUseCase : IGetByIdUseCase<GetDishResponse>
{
    private readonly IRepository<Dish> _dishRepository;

    public GetDishUseCase(IRepository<Dish> dishRepository)
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
