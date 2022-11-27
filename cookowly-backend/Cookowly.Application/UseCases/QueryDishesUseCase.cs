using Cookowly.Application.Contracts;
using Cookowly.Application.Extensions;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;

namespace Cookowly.Application.UseCases;

public class QueryDishesUseCase : IQueryableUseCase<GetDishResponse>
{
    private readonly IRepository<Dish> _dishRepository;

    public QueryDishesUseCase(IRepository<Dish> dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public IQueryable<GetDishResponse> Handle()
    {
        return _dishRepository.Query().AdaptAsQueryable<Dish, GetDishResponse>();
    }
}
