﻿namespace Cookowly.Application.Models.Response;

public class GetDishResponse
{
    public Guid Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;

    public DateTime Created { get; set; }

    public DateTime Modified { get; set; }
}
