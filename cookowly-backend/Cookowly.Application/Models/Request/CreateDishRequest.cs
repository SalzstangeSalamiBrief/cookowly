﻿using Cookowly.Application.Contracts;

namespace Cookowly.Application.Models.Request;

public class CreateDishRequest : IRequestOrResponse
{
    public string Title { get; set; } = string.Empty;

    public string Description { get; set; } = string.Empty;
}
