using Cookowly.Infrastructure.Authentication.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Cookowly.Infrastructure.Options;

internal class JwtBearerOptionsSetup : IConfigureOptions<JwtBearerOptions>
{
    private readonly JwtTokenOptions _jwtTokenOptions;

    public JwtBearerOptionsSetup(IOptions<JwtTokenOptions> jwtTokenOptions)
    {
        _jwtTokenOptions = jwtTokenOptions.Value;
    }

    public void Configure(JwtBearerOptions options)
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = false,
            ValidateIssuerSigningKey = true,
            ValidIssuer = _jwtTokenOptions.Issuer,
            ValidAudience = _jwtTokenOptions.Audience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtTokenOptions.Key))
        };
    }
}
