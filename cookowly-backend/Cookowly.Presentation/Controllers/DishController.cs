using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Application.UseCases;
using Microsoft.AspNetCore.Mvc;

namespace Cookowly.Presentation.Controllers;

[ApiController]
[Route("dish")]
public class DishController : ControllerBase
{
    [HttpGet]
    public async Task<IEnumerable<GetDishResponse>> Get(
        [FromServices] GetAllDishesUseCase useCase,
        CancellationToken cancellationToken)
    {
        return await useCase.Handle(cancellationToken);
    }

    [HttpPost]
    public async Task<AddDishResponse> Create(
        [FromServices] CreateDishUseCase useCase,
        [FromBody] AddDishRequest request,
        CancellationToken cancellationToken)
    {
        return await useCase.Handle(request, cancellationToken);
    }

    [HttpPatch("{id:guid}")]
    public async Task<UpdateDishResponse> Update(
        [FromServices] UpdateDishUseCase useCase,
        [FromRoute] Guid id,
        [FromBody] UpdateDishRequest request,
        CancellationToken cancellationToken)
    {
        return await useCase.Handle(id, request, cancellationToken);
    }

    [HttpDelete("{id:guid}")]
    public async Task Delete(
        [FromServices] DeleteDishUseCase useCase,
        [FromRoute] Guid id,
        CancellationToken cancellationToken)
    {
        await useCase.Handle(id, cancellationToken);
    }
}