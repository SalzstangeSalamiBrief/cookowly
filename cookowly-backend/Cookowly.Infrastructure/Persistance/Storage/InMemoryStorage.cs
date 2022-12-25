using Cookowly.Domain.Entities;

namespace Cookowly.Infrastructure.Persistance.Storage;

internal class InMemoryStorage
{
    internal ICollection<Dish> Dishes { get; } = new List<Dish>();

    internal ICollection<User> Users { get; } = new List<User>();
}
