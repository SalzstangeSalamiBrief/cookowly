using Cookowly.Application.Contracts;

namespace Cookowly.Presentation.Common;

public class ExecutionTimeAccessor : IExecutionTimeAccessor
{
    public DateTime ExecutionTime { get; } = DateTime.UtcNow;
}
