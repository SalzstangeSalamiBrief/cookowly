using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Models.Request;
using System.Security.Authentication;

namespace Cookowly.Application.UseCases;

public class SignInUseCase
{
    private readonly IHashingService _hashingService;
    private readonly ITokenProvider _tokenProvider;
    private readonly IUserRepository _userRepository;

    public SignInUseCase(IUserRepository userRepository,
        ITokenProvider tokenProvider,
        IHashingService hashingService)
    {
        _userRepository = userRepository;
        _tokenProvider = tokenProvider;
        _hashingService = hashingService;
    }

    public async Task<string> Handle(SingInRequest request, CancellationToken cancellationToken)
    {
        var userToSignIn = await _userRepository.FirstOrDefault(user =>
            user.Email == request.Email, cancellationToken);

        if (userToSignIn is null ||
            !_hashingService.Verify(request.Password, userToSignIn.PasswordSalt, userToSignIn.PasswordHash))
        {
            throw new InvalidCredentialException();
        }

        return _tokenProvider.CreateToken(userToSignIn);
    }
}
