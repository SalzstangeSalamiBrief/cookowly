using Cookowly.Application.Contracts;
using Cookowly.Infrastructure.Authentication.Models;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Security.Cryptography;

namespace Cookowly.Infrastructure.Authentication;

public class HashingService : IHashingService
{
    public IHashingResult Create(string input)
    {
        var salt = Generate128BitSalt();
        var hash = CreateHash(input, salt);

        return new HashingResult { Salt = Convert.ToBase64String(salt), Hash = Convert.ToBase64String(hash) };
    }

    public bool Verify(string input, string salt, string hash)
    {
        var saltBytes = Convert.FromBase64String(salt);
        var hashBytes = Convert.FromBase64String(hash);

        var hashFromInput = CreateHash(input, saltBytes);
        return CryptographicOperations.FixedTimeEquals(hashFromInput, hashBytes);
    }

    private static byte[] CreateHash(string input, byte[] salt)
    {
        return KeyDerivation.Pbkdf2(
            input,
            salt,
            KeyDerivationPrf.HMACSHA256,
            100000,
            256 / 8);
    }

    private static byte[] Generate128BitSalt()
    {
        return RandomNumberGenerator.GetBytes(128 / 8);
    }
}
