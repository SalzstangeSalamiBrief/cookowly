using Cookowly.Application;
using Cookowly.Application.Contracts;
using Cookowly.Infrastructure;
using Cookowly.Presentation.Common;
using Microsoft.AspNetCore.OData;
using System.Text.Json;

namespace Cookowly.Presentation;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        builder.Services.AddApplication();
        builder.Services.AddInfrastructure(builder.Configuration);

        builder.Services.AddScoped<IExecutionTimeAccessor, ExecutionTimeAccessor>();

        builder.Services
            .AddControllers()
            .AddOData(options =>
            {
                options.Filter().Select().OrderBy().Count().SetMaxTop(null);
            })
            .AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
            });

        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.UseAuthentication();
        app.UseAuthorization();
        app.MapControllers();
        app.Run();
    }
}
