using EarwaxSuper.Controllers;
using EarwaxSuper.Data;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace EarwaxSuperTest.StateWaiting
{
	class GameControllerShould
	{
		GameController sut;

		[SetUp]
		public void Setup()
		{
			var mocklog = new Mock<ILogger<GameController>>();
			var mockstate = new Mock<GameState>();
			mockstate.Setup(x => x.GetGameState()).Returns(GameStatusEnum.waiting);
			sut = new GameController(mocklog.Object, mockstate.Object);
		}

		[Test]
		public void ReturnNoContentIIfUserSendInputWhenStatusIsWaiting()
		{
			var testdata = new GameData() { answer = "test" };
			var result = sut.Post(testdata);
			var okResult = result as NoContentResult;

			Assert.IsNotNull(okResult);
		}
	}
}
