namespace Cookowly.Domain.Entities;

public abstract class AuditableEntity : Entity
{
    public string CreatedBy { get; set; } = string.Empty;

    public DateTime Created { get; set; }

    public string ModifiedBy { get; set; } = string.Empty;

    public DateTime Modified { get; set; }
}
