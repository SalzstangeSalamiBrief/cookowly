namespace Cookowly.Domain.Entities;

public abstract class AuditableEntity : Entity
{
    public required Guid CreatedById { get; set; }

    public required DateTime Created { get; set; }

    public required Guid ModifiedById { get; set; }

    public required DateTime Modified { get; set; }
}
