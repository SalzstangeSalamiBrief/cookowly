namespace Cookowly.Domain.Entities;

public class User : Entity
{
    public required string GivenName { get; set; }

    public required string Email { get; set; }

    public required string PasswordHash { get; set; }

    public required string PasswordSalt { get; set; }
}
