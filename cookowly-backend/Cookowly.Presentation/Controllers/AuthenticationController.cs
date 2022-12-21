using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Cookowly.Presentation.Controllers;

[ApiController]
[Route("auth")]
public class AuthenticationController : ControllerBase
{
    [AllowAnonymous]
    [HttpPost]
    [Route("singup")]
    public async Task SingUp([FromBody] LoginRequest loginRequest)
    {
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("singin")]
    public async Task SingIn([FromBody] LoginRequest loginRequest)
    {
        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Email, loginRequest.Credentials.Email),
            new Claim(ClaimTypes.Role, "Administrator")
        };
        
        var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
        var principal = new ClaimsPrincipal(identity);

        await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal, 
            new AuthenticationProperties
        {
            IsPersistent = loginRequest.RemeberMe ?? false
        });
    }

    [Authorize]
    [HttpGet]
    [Route("logout")]
    public async Task Logout()
    {
        await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
    }
}

public record Credentials(
    string Email,
    string Password);

public record LoginRequest(
    Credentials Credentials,
    bool? RemeberMe);