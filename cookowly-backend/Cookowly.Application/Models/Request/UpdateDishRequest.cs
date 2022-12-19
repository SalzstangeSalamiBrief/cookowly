using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Request;

public class UpdateDishRequest : IRequestOrResponse
{
    public required string Title { get; set; }

    public required string Description { get; set; }
}
