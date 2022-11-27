using Cookowly.Application.Contracts;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class QueryDishesUseCase
{
    private readonly IRepository<Dish> _dishRepository;

    public QueryDishesUseCase(IRepository<Dish> dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public IQueryable<GetDishResponse> Handle()
    {
        return _dishRepository.Query().Select(dish => dish.Adapt<GetDishResponse>());
    }
}
