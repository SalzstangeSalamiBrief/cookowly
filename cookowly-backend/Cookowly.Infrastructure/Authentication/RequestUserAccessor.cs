using Cookowly.Application.Contracts;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;

namespace Cookowly.Infrastructure.Authentication;

public class RequestUserAccessor : IRequestUserAccessor
{
    public Guid Id { get; }

    private RequestUserAccessor(Guid id)
    {
        Id = id;
    }

    public static RequestUserAccessor Init(IHttpContextAccessor httpContextAccessor)
    {
        var claimValue = httpContextAccessor.HttpContext?
            .User.FindFirst(JwtRegisteredClaimNames.Sid)?
            .Value;

        if (string.IsNullOrEmpty(claimValue))
        {
            throw new InvalidOperationException();
        }

        return new RequestUserAccessor(Guid.Parse(claimValue));
    }
}
