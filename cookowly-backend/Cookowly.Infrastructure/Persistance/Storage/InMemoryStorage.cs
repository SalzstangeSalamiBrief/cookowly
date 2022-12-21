using Cookowly.Domain.Entities;

namespace Cookowly.Infrastructure.Persistance.Storage;

internal class InMemoryStorage
{
    internal ICollection<Dish> Dishes { get; set; } = new List<Dish>();

    internal ICollection<User> Users { get; set; } = new List<User>();
}
