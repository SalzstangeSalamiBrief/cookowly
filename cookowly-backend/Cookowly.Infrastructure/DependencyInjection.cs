using Cookowly.Application.Contracts;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Authentication;
using Cookowly.Infrastructure.Options;
using Cookowly.Infrastructure.Persistance;
using Cookowly.Infrastructure.Persistance.Storage;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;

namespace Cookowly.Infrastructure;

public static class DependencyInjection
{
    public static void AddInfrastructure(this IServiceCollection services)
    {

        services.ConfigureOptions<JwtTokenOptionsSetup>();
        services.ConfigureOptions<JwtBearerOptionsSetup>();

        services.AddSingleton<InMemoryStorage>();
        services.AddSingleton<IRepository<User>, UserRepository>();
        services.AddSingleton<IRepository<Dish>, DishRepository>();
        services.AddSingleton<IQueryableRepository<Dish>, DishRepository>();
        services.AddSingleton<ITokenProvider, JwtTokenProvider>();

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer();
    }
}
