using Cookowly.Domain.Entities;

namespace Cookowly.Application.Contracts;

public interface IRepository<T> where T : Entity
{
    IQueryable<T> Query(CancellationToken cancellationToken = default);

    ValueTask<T> Create(T entity, CancellationToken cancellationToken = default);

    ValueTask<T> Update(Guid id, T entity, CancellationToken cancellationToken = default);

    ValueTask Delete(Guid id, CancellationToken cancellationToken = default);
}
