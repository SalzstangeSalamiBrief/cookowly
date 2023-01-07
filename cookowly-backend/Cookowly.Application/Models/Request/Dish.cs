namespace Cookowly.Application.Models.Request;

public sealed record CreateDishRequest(
    string Title,
    string Description);

public sealed record UpdateDishRequest(
    string Title,
    string Description);
