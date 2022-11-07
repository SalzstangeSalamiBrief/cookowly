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
        [FromServices] GetAllDishesUseCase getAllDishesUseCase,
        CancellationToken cancellationToken)
    {
        return await getAllDishesUseCase.Handle(cancellationToken);
    }

    [HttpPost]
    public async Task<AddDishResponse> Create(
        [FromServices]AddDishUseCase addDishUseCase, 
        [FromBody]AddDishRequest request, 
        CancellationToken cancellationToken)
    {
        return await addDishUseCase.Handle(request, cancellationToken);
    }
}
