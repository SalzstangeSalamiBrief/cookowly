namespace Cookowly.Application.Contracts;

public interface IFileStorage
{
    Task<string> Add(Stream fileStream);

    Task<string> Get(Guid id);

    Task Remove(Guid id);
}
