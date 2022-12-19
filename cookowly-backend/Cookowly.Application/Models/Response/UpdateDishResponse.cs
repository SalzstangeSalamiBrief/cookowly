﻿using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Response;

public class UpdateDishResponse : IRequestOrResponse
{
    public required Guid Id { get; set; }

    public required string Title { get; set; }

    public required string Description { get; set; }

    public required DateTime Created { get; set; }

    public required DateTime Modified { get; set; }
}
