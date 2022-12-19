namespace Cookowly.Application.Contracts;

public interface IQueryableRepository<T>
{
    IQueryable<T> Query();
}
