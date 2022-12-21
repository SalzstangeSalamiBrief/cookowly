using Cookowly.Application.Models.Request;
using Cookowly.Application.UseCases;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cookowly.Presentation.Controllers;

[ApiController]
[Route("auth")]
public class AuthController : ControllerBase
{
    [AllowAnonymous]
    [HttpPost]
    [Route("signup")]
    public async Task<SignUpResponse> SignUp(
        [FromServices] SignUpUseCase useCase,
        [FromBody] SignUpRequest request, 
        CancellationToken cancellation)
    {
        return await useCase.Handle(request, cancellation);
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("signin")]
    public string SingIn()
    {
        return "";
    }
}
