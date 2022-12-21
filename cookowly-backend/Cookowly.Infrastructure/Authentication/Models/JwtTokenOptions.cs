namespace Cookowly.Infrastructure.Authentication.Models;

internal class JwtTokenOptions
{
    public required string Issuer { get; set; }

    public required string Audience { get; set; }

    public required string Key { get; set; }
}