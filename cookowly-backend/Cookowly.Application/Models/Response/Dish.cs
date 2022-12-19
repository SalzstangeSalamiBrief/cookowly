using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Response;

public sealed record GetDishResponse(
    Guid Id,
    string Title,
    string Description,
    DateTime Created,
    DateTime Modified) : IDataTransferObject;

public sealed record CreateDishResponse(
    Guid Id,
    string Title,
    string Description,
    DateTime Created,
    DateTime Modified) : IDataTransferObject;

public sealed record UpdateDishResponse(
    Guid Id,
    string Title,
    string Description,
    DateTime Created,
    DateTime Modified) : IDataTransferObject;