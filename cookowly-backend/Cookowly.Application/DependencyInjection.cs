using Cookowly.Application.UseCases;
using Microsoft.Extensions.DependencyInjection;

namespace Cookowly.Application;

public static class DependencyInjection
{
    public static void AddApplication(this IServiceCollection services)
    {
        services.AddScoped<AddDishUseCase>();
        services.AddScoped<GetAllDishesUseCase>();
    }
}
