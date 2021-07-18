using EarwaxSuper.Data;
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

		private readonly ILogger<GameController> _logger;
		private IGameState _state { get; }

		public GameController(ILogger<GameController> logger, IGameState state)
		{
			_logger = logger;
			_state = state;
		}

		[HttpGet]
		public IEnumerable<string> Get()
		{
			try
			{
				return _state.GetPlayerInputs();
			}
			catch(Exception ex)
			{
				_logger.Log(LogLevel.Error ,"Error in GameController Get {0}", ex.InnerException);
				return new List<string>();
				//return BadRequest("Failed Getting Player input");
			}
		}

		[HttpPost]
		public IActionResult Post([FromBody] GameData value)
		{
			try
			{
				if (value.answer == null)
					return BadRequest();
				_state.SavePlayerInput(value.answer);

				return Ok();
			}
			catch(Exception ex)
			{
				_logger.Log(LogLevel.Error, "Error in GameController Get {0}", ex.InnerException);
				return BadRequest("Failed adding Player input");
			}
		}
	}
}
