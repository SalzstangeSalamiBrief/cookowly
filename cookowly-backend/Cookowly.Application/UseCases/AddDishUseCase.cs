﻿using Cookowly.Application.Contracts;
using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;

namespace Cookowly.Application.UseCases;

public class AddDishUseCase : IUseCase<AddDishRequest, AddDishResponse>
{
    private readonly IRepository<Dish> _dishRespository;

    public AddDishUseCase(IRepository<Dish> dishRespository)
    {
        _dishRespository = dishRespository;
    }

    public async Task<AddDishResponse> Handle(AddDishRequest request, CancellationToken cancellationToken = default)
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

        return new AddDishResponse
        {
            Id = createdDish.Id,
            Title = createdDish.Title,
            Description = createdDish.Description
        };
    }
}
