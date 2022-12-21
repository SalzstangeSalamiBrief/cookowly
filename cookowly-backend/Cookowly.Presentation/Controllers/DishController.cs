using Cookowly.Application.Models.Request;
using Cookowly.Application.Models.Response;
using Cookowly.Application.UseCases;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OData.Query;

namespace Cookowly.Presentation.Controllers;

[Authorize]
[ApiController]
[Route("dish")]
public class DishController
{
    [EnableQuery]
    [HttpGet]
    public IQueryable<GetDishResponse> Query(
        [FromServices] QueryDishesUseCase useCase)
    {
        return useCase.Handle();
    }

    [EnableQuery]
    [HttpGet("{id:guid}")]
    public async Task<GetDishResponse> GetById(
        [FromServices] GetDishUseCase useCase,
        [FromRoute] Guid id,
        CancellationToken cancellationToken)
    {
        return await useCase.Handle(id, cancellationToken);
    }

    [HttpPost]
    public async Task<CreateDishResponse> Create(
        [FromServices] CreateDishUseCase useCase,
        [FromBody] CreateDishRequest request,
        CancellationToken cancellationToken)
    {
        return await useCase.Handle(request, cancellationToken);
    }

    [HttpPut("{id:guid}")]
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
