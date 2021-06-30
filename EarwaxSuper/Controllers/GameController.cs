using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EarwaxSuper.Controllers
{
	[EnableCors]
	[Route("api/[controller]")]
	[ApiController]
	public class GameController : ControllerBase
	{
		private  string[] PlayerInput = new[]
{
			"meep", "moop"
		};

		private readonly ILogger<GameController> _logger;

		[EnableCors]
		[HttpGet]
		public IEnumerable<string> Get()
		{
			return PlayerInput;
		}
	}
}
