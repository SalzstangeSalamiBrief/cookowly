using Cookowly.Application.Contracts.Repositories;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Request;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class SignUpUseCase
{
    private readonly IUserRepository _userRepository;

    public SignUpUseCase(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task Handle(SignUpRequest request, CancellationToken cancellationToken = default)
    {
        var userWithSameEmail = await _userRepository.FirstOrDefault(
            user => user.Email == request.Email, cancellationToken);

        if (userWithSameEmail is not null)
        {
            throw new EmailAlreadyExistsException(request.Email);
        }

        var userToCreate = request.Adapt<User>();
        userToCreate.Id = Guid.NewGuid();

        await _userRepository.Create(userToCreate, cancellationToken);
    }
}
