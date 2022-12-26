namespace Cookowly.Application.Contracts;

public interface IHashingResult
{
    string Hash { get; }

    string Salt { get; }
}
