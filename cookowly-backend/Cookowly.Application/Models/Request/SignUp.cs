namespace Cookowly.Application.Models.Request;

public sealed record SignUpRequest(
    string GivenName,
    string Email,
    string Password);
