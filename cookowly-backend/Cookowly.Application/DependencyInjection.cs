using Cookowly.Application.UseCases;
using Microsoft.Extensions.DependencyInjection;

namespace Cookowly.Application;

public static class DependencyInjection
{
    public static void AddApplication(this IServiceCollection services)
    {
        services.AddScoped<QueryDishesUseCase>();
        services.AddScoped<GetDishUseCase>();
        services.AddScoped<CreateDishUseCase>();
        services.AddScoped<DeleteDishUseCase>();
        services.AddScoped<UpdateDishUseCase>();
        services.AddScoped<SignUpUseCase>();
        services.AddScoped<SignInUseCase>();
    }
}
