namespace Cookowly.Application.Contracts;

public interface IHashingService
{
    IHashingResult Create(string input);

    bool Verify(string input, string salt, string hash);
}
