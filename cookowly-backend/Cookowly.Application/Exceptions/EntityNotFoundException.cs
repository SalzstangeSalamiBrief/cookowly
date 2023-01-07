namespace Cookowly.Application.Exceptions;

public class EntityNotFoundException : Exception
{
    public EntityNotFoundException(Type entityType, Guid id) :
        base($"Entity of type '{entityType.Name}' and id '{id}' not found")
    {
    }
}
