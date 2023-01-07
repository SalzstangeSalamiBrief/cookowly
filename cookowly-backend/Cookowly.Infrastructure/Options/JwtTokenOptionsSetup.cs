using Cookowly.Infrastructure.Authentication.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Cookowly.Infrastructure.Options;

internal class JwtTokenOptionsSetup : IConfigureOptions<JwtTokenOptions>
{
    private const string SECTION_NAME = "JwtTokenOptions";
    private readonly IConfiguration _configuration;

    public JwtTokenOptionsSetup(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public void Configure(JwtTokenOptions options)
    {
        _configuration.GetSection(SECTION_NAME).Bind(options);
    }
}
