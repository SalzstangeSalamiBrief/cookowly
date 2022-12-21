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
    public async Task SignUp(
        [FromServices] SignUpUseCase useCase,
        [FromBody] SignUpRequest request,
        CancellationToken cancellationToken)
    {
        await useCase.Handle(request, cancellationToken);
    }

    [AllowAnonymous]
    [HttpPost]
    [Route("signin")]
    public async Task<string> SingIn(
        [FromServices] SignInUseCase useCase,
        [FromBody] SingInRequest request,
        CancellationToken cancellationToken)
    {
        return await useCase.Handle(request, cancellationToken);
    }
}
