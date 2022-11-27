using Mapster;

namespace Cookowly.Application.Extensions;

internal static class IQueryableExtensions
{
    internal static IQueryable<TDestination> AdaptAsQueryable<TSource, TDestination>(this IQueryable<TSource> queryable)
        where TSource : class
        where TDestination : class
    {
        return queryable.Select(entry => entry!.Adapt<TDestination>());
    }
}
