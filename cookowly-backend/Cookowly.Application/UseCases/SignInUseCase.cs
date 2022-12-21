using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Models.Request;
using System.Security.Authentication;
using System.Security.Claims;

namespace Cookowly.Application.UseCases;

public class SignInUseCase
{
    private readonly IUserRepository _userRepository;
    private readonly ITokenProvider _tokenProvider;

    public SignInUseCase(IUserRepository userRepository, ITokenProvider tokenProvider)
    {
        _userRepository = userRepository;
        _tokenProvider = tokenProvider;
    }

    public async Task<string> Handle(SingInRequest request, CancellationToken cancellationToken)
    {
        var userToSignIn = await _userRepository.FirstOrDefault(
            user => user.Email == request.Email && user.Password == request.Password, cancellationToken);

        if (userToSignIn is null)
        {
            throw new InvalidCredentialException();
        }

        return _tokenProvider.CreateToken(userToSignIn);
    }
}
