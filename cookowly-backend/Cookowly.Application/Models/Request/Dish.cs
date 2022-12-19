using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Request;

public sealed record CreateDishRequest(
    string Title, 
    string Description) : IDataTransferObject;

public sealed record UpdateDishRequest(
    string Title, 
    string Description) : IDataTransferObject;
