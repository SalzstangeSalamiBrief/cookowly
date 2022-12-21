using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Request;

public sealed record SignUpRequest(
    string Email,
    string Password) : IDataTransferObject;
