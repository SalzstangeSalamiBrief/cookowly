namespace Cookowly.Application.Models.Request;

public sealed record SingInRequest(
    string Email,
    string Password);
