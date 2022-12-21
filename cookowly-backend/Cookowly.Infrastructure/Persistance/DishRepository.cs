using Cookowly.Application.Contracts;
using Cookowly.Application.Exceptions;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Persistance.Storage;

namespace Cookowly.Infrastructure.Persistance;

internal class DishRepository : IRepository<Dish>, IQueryableRepository<Dish>
{
    private readonly InMemoryStorage _storage;

    public DishRepository(InMemoryStorage storage)
    {
        _storage = storage;
    }

    public IQueryable<Dish> Query()
    {
        return _storage.Dishes.AsQueryable();
    }

    public ValueTask<Dish?> FirstOrDefault(Func<Dish, bool> predicate, CancellationToken cancellationToken = default)
    {
        return ValueTask.FromResult(_storage.Dishes.FirstOrDefault(predicate));
    }

    public ValueTask<Dish> Create(Dish entity, CancellationToken cancellationToken = default)
    {
        _storage.Dishes.Add(entity);
        return ValueTask.FromResult(entity);
    }

    public ValueTask<Dish> Update(Guid id, Dish entity, CancellationToken cancellationToken = default)
    {
        var entityToUpdate = _storage.Dishes.FirstOrDefault(entry => entry.Id == id);
        if (entityToUpdate is null)
        {
            throw new EntityNotFoundException(typeof(Entity), id);
        }

        entityToUpdate.Title = entity.Title;
        entityToUpdate.Description = entity.Description;
        entityToUpdate.ModifiedBy = entity.ModifiedBy;
        entityToUpdate.Modified = entity.Modified;

        return ValueTask.FromResult(entity);
    }

    public ValueTask Delete(Guid id, CancellationToken cancellationToken = default)
    {
        var entityToRemove = _storage.Dishes.FirstOrDefault(entry => entry.Id == id);
        if (entityToRemove is null)
        {
            throw new EntityNotFoundException(typeof(Entity), id);
        }

        _storage.Dishes.Remove(entityToRemove);
        return ValueTask.CompletedTask;
    }
}
