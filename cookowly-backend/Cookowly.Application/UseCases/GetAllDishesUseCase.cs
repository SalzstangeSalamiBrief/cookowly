﻿using Cookowly.Application.Contracts;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class GetAllDishesUseCase : IUseCase<IEnumerable<GetDishResponse>>
{
    private readonly IRepository<Dish> _dishRepository;

    public GetAllDishesUseCase(IRepository<Dish> dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public async Task<IEnumerable<GetDishResponse>> Handle(CancellationToken cancellationToken = default)
    {
        var dishes = await _dishRepository.Find(_ => true, cancellationToken);
        return dishes.Adapt<IEnumerable<GetDishResponse>>();
    }
}
