namespace Cookowly.Application.Models.Request;

public class CreateDishRequest
{
    public required string Title { get; set; }

    public required string Description { get; set; }
}
