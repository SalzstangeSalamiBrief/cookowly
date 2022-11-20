using Cookowly.Application.UseCases;
using Microsoft.Extensions.DependencyInjection;

namespace Cookowly.Application;

public static class DependencyInjection
{
    public static void AddApplication(this IServiceCollection services)
    {
        services.AddScoped<GetAllDishesUseCase>();
        services.AddScoped<CreateDishUseCase>();
        services.AddScoped<DeleteDishUseCase>();
        services.AddScoped<UpdateDishUseCase>();
    }
}
