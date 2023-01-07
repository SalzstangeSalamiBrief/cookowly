using Cookowly.Application.Contracts;
using Cookowly.Domain.Entities;
using Cookowly.Infrastructure.Authentication.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Cookowly.Infrastructure.Authentication;

internal class JwtTokenProvider : ITokenProvider
{
    private readonly JwtTokenOptions _jwtTokenOptions;

    public JwtTokenProvider(IOptions<JwtTokenOptions> jwtTokenOptions)
    {
        _jwtTokenOptions = jwtTokenOptions.Value;
    }

    public string CreateToken(User user)
    {
        var claims = new List<Claim>
        {
            new(JwtRegisteredClaimNames.Sid, user.Id.ToString()),
            new(JwtRegisteredClaimNames.Email, user.Email),
            new(JwtRegisteredClaimNames.Typ, "Administrator"),
            new(JwtRegisteredClaimNames.GivenName, user.GivenName)
        };

        var identity = new ClaimsIdentity(claims, JwtBearerDefaults.AuthenticationScheme);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = identity,
            Audience = _jwtTokenOptions.Audience,
            Issuer = _jwtTokenOptions.Issuer,
            SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtTokenOptions.Key)),
                SecurityAlgorithms.HmacSha256)
        };

        var tokenHandler = new JwtSecurityTokenHandler();
        var token = tokenHandler.CreateToken(tokenDescriptor);
        return tokenHandler.WriteToken(token);
    }
}
