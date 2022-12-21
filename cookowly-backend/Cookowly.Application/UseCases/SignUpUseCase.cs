using Cookowly.Application.Contracts;
using Cookowly.Application.Exceptions;
using Cookowly.Application.Models.Request;
using Cookowly.Domain.Entities;
using Mapster;

namespace Cookowly.Application.UseCases;

public class SignUpUseCase : ICreateUseCase<SignUpRequest, SignUpResponse>
{
    private readonly IRepository<User> _userRepository;

    public SignUpUseCase(IRepository<User> userRepository)
    {
        _userRepository = userRepository;
    }

    public async Task<SignUpResponse> Handle(SignUpRequest request, CancellationToken cancellationToken = default)
    {
        var userWithSameEmail = await _userRepository.FirstOrDefault(
            user => user.Email == request.Email, cancellationToken);

        if (userWithSameEmail is not null)
        {
            throw new UserAlreadyExistsException(request.Email);
        }

        var userToCreate = request.Adapt<User>();
        userToCreate.Id = Guid.NewGuid();

        var createdUser = await _userRepository.Create(userToCreate, cancellationToken);
        return createdUser.Adapt<SignUpResponse>();
    }
}
