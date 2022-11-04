using Cookowly.Application.Contracts;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Persistance;
using Microsoft.Extensions.DependencyInjection;

namespace Cookowly.Infrastructure;

public static class DependencyInjection
{
    public static void AddInfrastructer(this IServiceCollection services)
    {
        services.AddScoped<IRepository<Dish>, DishInMemoryCache>();
    }
}
