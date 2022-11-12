namespace Cookowly.Domain.Entities;

public class Dish : AuditableEntity
{
    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;
}
