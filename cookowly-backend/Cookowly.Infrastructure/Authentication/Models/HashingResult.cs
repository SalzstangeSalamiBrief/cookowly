using Cookowly.Application.Contracts;

namespace Cookowly.Infrastructure.Authentication.Models;

public class HashingResult : IHashingResult
{
    public required string Hash { get; init; }

    public required string Salt { get; init; }
}
