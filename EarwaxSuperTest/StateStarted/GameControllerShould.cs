using NUnit.Framework;
using Moq;
using EarwaxSuper.Controllers;
using Microsoft.Extensions.Logging;
using EarwaxSuper.Data;
using static EarwaxSuper.Data.GameState;
using Microsoft.AspNetCore.Mvc;

namespace EarwaxSuperTest.StatusStarted
{
	public class GameControllerShould
	{
		GameController sut;

		[SetUp]
		public void Setup()
		{
			var mocklog = new Mock<ILogger<GameController>>();
			var mockstate = new Mock<GameState>();
			mockstate.Setup(x => x.GetGameState()).Returns(GameStatusEnum.started);
			sut = new GameController(mocklog.Object, mockstate.Object);
			//var mockRepo = new Mock<GameController>();
			//var mockLog = new Mock<ILogger<HomeController>>();
		}

		[Test]
		public void ReturnOKfUserSendInputWhenStatusIsStarted()
		{
			var testdata = new GameData() { answer = "test" };
			var result = sut.Post(testdata);
			var okResult = result as OkResult;

			Assert.IsNotNull(okResult);
		}

	}
}