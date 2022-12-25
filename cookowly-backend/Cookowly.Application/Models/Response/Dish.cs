using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Response;

public sealed record GetDishResponse(
    Guid Id,
    string Title,
    string Description,
    DateTime Created);

public sealed record CreateDishResponse(
    Guid Id,
    string Title,
    string Description,
    DateTime Created,
    DateTime Modified);

public sealed record UpdateDishResponse(
    Guid Id,
    string Title,
    string Description,
    DateTime Created,
    DateTime Modified);