using EarwaxSuper.Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

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


		[HttpGet("/ws")]
		public async Task Get()
		{
			try
			{
				if (HttpContext.WebSockets.IsWebSocketRequest)
				{
					using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();
					_logger.Log(LogLevel.Information, "WebSocket connection established");
					await Echo(webSocket);
					// JsonResult(_state.GetGameState());
				}
				else
				{
					HttpContext.Response.StatusCode = 400;
				}
			}
			catch (Exception ex)
			{
				_logger.Log(LogLevel.Error, "Error in GameController Get {0}", ex.InnerException);
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

		private async Task Echo(WebSocket webSocket)
		{
			var buffer = new byte[1024 * 4];
			var result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
			_logger.Log(LogLevel.Information, "Message received from Client");

			while (!result.CloseStatus.HasValue)
			{
				var serverMsg = Encoding.UTF8.GetBytes($"Server: Hello. You said: {Encoding.UTF8.GetString(buffer)}");
				await webSocket.SendAsync(new ArraySegment<byte>(serverMsg, 0, serverMsg.Length), result.MessageType, result.EndOfMessage, CancellationToken.None);
				_logger.Log(LogLevel.Information, "Message sent to Client");

				result = await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
				_logger.Log(LogLevel.Information, "Message received from Client");

			}
			await webSocket.CloseAsync(result.CloseStatus.Value, result.CloseStatusDescription, CancellationToken.None);
			_logger.Log(LogLevel.Information, "WebSocket connection closed");
		}
	}
}
