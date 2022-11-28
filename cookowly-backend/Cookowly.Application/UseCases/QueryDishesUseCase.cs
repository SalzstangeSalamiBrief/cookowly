using Cookowly.Application.Contracts;
using Cookowly.Application.Extensions;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;

namespace Cookowly.Application.UseCases;

public class QueryDishesUseCase : IQueryableUseCase<GetDishResponse>
{
    private readonly IQueryableRepository<Dish> _queryableDishRepository;

    public QueryDishesUseCase(IQueryableRepository<Dish> queryableDishRepository)
    {
        _queryableDishRepository = queryableDishRepository;
    }

    public IQueryable<GetDishResponse> Handle()
    {
        return _queryableDishRepository.Query().AdaptAsQueryable<Dish, GetDishResponse>();
    }
}
