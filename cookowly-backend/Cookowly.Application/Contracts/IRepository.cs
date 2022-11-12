using System.Linq.Expressions;

namespace Cookowly.Application.Contracts;

public interface IRepository<T>
{
    ValueTask<IEnumerable<T>> Find(Func<T, bool> predicate, CancellationToken cancellationToken = default);

    ValueTask<T> Create(T entity, CancellationToken cancellationToken = default);

    ValueTask<T> Update(Guid id, T entity, CancellationToken cancellationToken = default);

    ValueTask Delete(Guid id, CancellationToken cancellationToken = default);
}
