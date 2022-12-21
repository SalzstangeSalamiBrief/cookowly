using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Authentication;
using Cookowly.Infrastructure.Authentication.Models;
using Cookowly.Infrastructure.Options;
using Cookowly.Infrastructure.Persistance;
using Cookowly.Infrastructure.Persistance.Storage;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Cookowly.Infrastructure;

public static class DependencyInjection
{
    public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
    {

        services.ConfigureOptions<JwtTokenOptionsSetup>();
        //services.ConfigureOptions<JwtBearerOptionsSetup>();

        services.AddSingleton<InMemoryStorage>();
        services.AddSingleton<IUserRepository, UserRepository>();
        services.AddSingleton<IDishRepository, DishRepository>();
        services.AddSingleton<IQueryableRepository<Dish>, DishRepository>();
        services.AddSingleton<ITokenProvider, JwtTokenProvider>();

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
