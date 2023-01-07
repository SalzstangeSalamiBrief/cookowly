using Cookowly.Application.Contracts;
using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Request;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class SignUpUseCase
{
    private readonly IHashingService _hashingService;
    private readonly IUserRepository _userRepository;

    public SignUpUseCase(IUserRepository userRepository, IHashingService hashingService)
    {
        _userRepository = userRepository;
        _hashingService = hashingService;
    }

    public async Task Handle(SignUpRequest request, CancellationToken cancellationToken = default)
    {
        var userWithSameEmail = await _userRepository.FirstOrDefault(
            user => user.Email == request.Email, cancellationToken);

        if (userWithSameEmail is not null)
        {
            throw new EmailAlreadyExistsException(request.Email);
        }

        var hashingResult = _hashingService.Create(request.Password);

        var userToCreate = request.Adapt<User>();
        userToCreate.Id = Guid.NewGuid();
        userToCreate.PasswordHash = hashingResult.Hash;
        userToCreate.PasswordSalt = hashingResult.Salt;

        await _userRepository.Create(userToCreate, cancellationToken);
    }
}
