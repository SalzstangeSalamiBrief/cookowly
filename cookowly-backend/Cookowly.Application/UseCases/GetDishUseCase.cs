using Cookowly.Application.Contracts;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class GetDishUseCase : IUseCase<Guid, GetDishResponse>
{
    private readonly IRepository<Dish> _dishRepository;

    public GetDishUseCase(IRepository<Dish> dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public Task<GetDishResponse> Handle(Guid id, CancellationToken cancellationToken = default)
    {
        var dish = _dishRepository.Query().FirstOrDefault(dish => dish.Id == id);
        if (dish is null)
        {
            throw new EntityNotFoundException(typeof(Dish), id);
        }

        return Task.FromResult(dish.Adapt<GetDishResponse>());
    }
}
