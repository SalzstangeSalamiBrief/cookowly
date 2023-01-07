using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Authentication;
using Cookowly.Infrastructure.Options;
using Cookowly.Infrastructure.Persistance;
using Cookowly.Infrastructure.Persistance.Storage;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Cookowly.Infrastructure;

public static class DependencyInjection
{
    public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddHttpContextAccessor();
        services.AddScoped<IRequestUserAccessor>(serviceProvider =>
            RequestUserAccessor.Init(serviceProvider.GetRequiredService<IHttpContextAccessor>()));

        services.ConfigureOptions<JwtTokenOptionsSetup>();

        services.AddSingleton<InMemoryStorage>();
        services.AddSingleton<ITokenProvider, JwtTokenProvider>();
        services.AddSingleton<IHashingService, HashingService>();

        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IDishRepository, DishRepository>();
        services.AddScoped<IQueryableRepository<Dish>, DishRepository>();

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                var issuer = configuration["JwtTokenOptions:Issuer"];
                var audience = configuration["JwtTokenOptions:Audience"];
                var key = configuration["JwtTokenOptions:Key"]!;

                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = false,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = issuer,
                    ValidAudience = audience,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
                };
            });
    }
}
