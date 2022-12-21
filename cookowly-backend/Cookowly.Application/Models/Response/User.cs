using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Request;

public sealed record SignUpResponse(
    Guid Id,
    string Email) : IDataTransferObject;
