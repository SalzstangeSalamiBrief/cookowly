﻿using Cookowly.Application.Contracts;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Domain.Entities;

namespace Cookowly.Application.UseCases;

public class UpdateDishUseCase : IUseCase<Guid, UpdateDishRequest, UpdateDishResponse>
{
    private readonly IRepository<Dish> _dishRepository;

    public UpdateDishUseCase(IRepository<Dish> dishRepository)
    {
        _dishRepository = dishRepository;
    }

    public async Task<UpdateDishResponse> Handle(Guid id, UpdateDishRequest request, CancellationToken cancellationToken = default)
    {
        var dishToUpdate = await _dishRepository.FirstOrDefault(dish => dish.Id == id, cancellationToken);
        if (dishToUpdate is null)
        {
            throw new EntityNotFoundException(typeof(Dish), id);
        }

        dishToUpdate.Title = request.Title;
        dishToUpdate.Description = request.Description;
        dishToUpdate.Modified = DateTime.UtcNow;

        return new UpdateDishResponse
        {
            Id = dishToUpdate.Id,
            Title = dishToUpdate.Title,
            Description = dishToUpdate.Description,
            Created = dishToUpdate.Created,
            Modified = dishToUpdate.Modified
        };
    }
}
