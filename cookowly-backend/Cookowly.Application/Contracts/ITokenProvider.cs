using Cookowly.Domain.Entities;

namespace Cookowly.Application.Contracts;

public interface ITokenProvider
{
    string CreateToken(User user);
}
