namespace Cookowly.Domain.Entities;

public class Dish : AuditableEntity
{
    public required string Title { get; set; }

    public required string Description { get; set; }
}
