using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Exceptions;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Persistance.Storage;

namespace Cookowly.Infrastructure.Persistance;

internal class UserRepository : IUserRepository
{
    private readonly InMemoryStorage _storage;

    public UserRepository(InMemoryStorage storage)
    {
        _storage = storage;
    }

    public ValueTask<User?> FirstOrDefault(Func<User, bool> predicate, CancellationToken cancellationToken = default)
    {
        return ValueTask.FromResult(_storage.Users.FirstOrDefault(predicate));
    }

    public ValueTask<User> Create(User entity, CancellationToken cancellationToken = default)
    {
        _storage.Users.Add(entity);
        return ValueTask.FromResult(entity);
    }

    public ValueTask<User> Update(Guid id, User entity, CancellationToken cancellationToken = default)
    {
        var entityToUpdate = _storage.Users.FirstOrDefault(entry => entry.Id == id);
        if (entityToUpdate is null)
        {
            throw new EntityNotFoundException(typeof(Entity), id);
        }

        entityToUpdate.Email = entity.Email;
        entityToUpdate.Password = entity.Password;

        return ValueTask.FromResult(entity);
    }

    public ValueTask Delete(Guid id, CancellationToken cancellationToken = default)
    {
        var entityToRemove = _storage.Users.FirstOrDefault(entry => entry.Id == id);
        if (entityToRemove is null)
        {
            throw new EntityNotFoundException(typeof(Entity), id);
        }

        _storage.Users.Remove(entityToRemove);
        return ValueTask.CompletedTask;
    }
}
