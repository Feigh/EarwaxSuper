using EarwaxSuper.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace EarwaxSuper.Controllers
{
	[EnableCors]
	[Route("api/[controller]")]
	[ApiController]
	public class StateController : ControllerBase
	{
		private readonly ILogger<GameController> _logger;
		private IGameState _state { get; }

		public StateController(ILogger<GameController> logger, IGameState state)
		{
			_logger = logger;
			_state = state;
		}

		[HttpGet]
		public JsonResult Get()
		{
			try
			{
				return new JsonResult(_state.GetGameState());
			}
			catch (Exception ex)
			{
				_logger.Log(LogLevel.Error, "Error in GameController Get {0}", ex.InnerException);
				return new JsonResult("Failed Getting Player input");
			}
		}

		[HttpPost]
		public IActionResult Post([FromBody] StatusData value)
		{
			try
			{
				if (value.status == null)
					return BadRequest();
				_state.ChangeGameState(value.status);

				return Ok();
			}
			catch (Exception ex)
			{
				_logger.Log(LogLevel.Error, "Error in GameController Get {0}", ex.InnerException);
				return BadRequest("Failed adding Player input");
			}
		}
	}
}
