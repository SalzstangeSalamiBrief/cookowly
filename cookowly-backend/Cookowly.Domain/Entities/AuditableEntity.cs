namespace Cookowly.Domain.Entities;

public abstract class AuditableEntity : Entity
{
    public required string CreatedBy { get; set; }

    public required DateTime Created { get; set; }

    public required string ModifiedBy { get; set; }

    public required DateTime Modified { get; set; }
}
