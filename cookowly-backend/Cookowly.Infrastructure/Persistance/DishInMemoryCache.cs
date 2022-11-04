using Cookowly.Application.Contracts;
using Cookowly.Application.Exceptions;
using Cookowly.Domain.Entities;

namespace Cookowly.Infrastructure.Persistance;

public class DishInMemoryCache : IRepository<Dish>
{
    private readonly ICollection<Dish> _memoryCache = new List<Dish>();

    public ValueTask<IEnumerable<Dish>> Find(Func<Dish, bool> predicate, CancellationToken cancellationToken = default)
    {
        return ValueTask.FromResult(_memoryCache.Where(predicate));
    }

    public ValueTask<Dish> Create(Dish entity, CancellationToken cancellationToken = default)
    {
        _memoryCache.Add(entity);
        return ValueTask.FromResult(entity);
    }

    public ValueTask<Dish> Update(Guid id, Dish entity, CancellationToken cancellationToken = default)
    {
        var entityToUpdate = _memoryCache.FirstOrDefault(entry => entry.Id == id);
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
        var entityToRemove = _memoryCache.FirstOrDefault(entry => entry.Id == id);
        if (entityToRemove is null)
        {
            throw new EntityNotFoundException(typeof(Entity), id);
        }

        _memoryCache.Remove(entityToRemove);
        return ValueTask.CompletedTask;
    }
}
