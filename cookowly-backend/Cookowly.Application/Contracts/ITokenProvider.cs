namespace Cookowly.Application.Contracts;

public interface ITokenProvider
{
    string CreateToken(string email, string password);
}
