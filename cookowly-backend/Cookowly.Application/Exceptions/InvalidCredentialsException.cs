namespace Cookowly.Application.Exceptions;

public class InvalidCredentialsException : Exception
{
    public InvalidCredentialsException() :
        base($"Provided email and password combination is invalid")
    {
    }
}
