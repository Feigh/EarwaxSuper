using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EarwaxSuper.Data
{
	public class GameState : IGameState
	{
		public enum GameStatusEnum
		{
			waiting,
			started,
			finish
		}
		private List<string> PlayerInput { get; set; }
		private List<string> Players { get; set; }
		private GameStatusEnum CurrentGameStatus { get; set; }
		public GameState()
		{
			PlayerInput = new List<string>();
			Players = new List<string>();
			CurrentGameStatus = GameStatusEnum.waiting;
		}

		public void SavePlayerInput(string value)
		{
			PlayerInput.Add(value);
		}

		public List<string> GetPlayerInputs()
		{
			return PlayerInput;
		}

		public void AddPlayer(string name)
		{
			throw new NotImplementedException();
		}

		public List<string> GetPlayerList()
		{
			throw new NotImplementedException();
		}

		public void ChangeGameState(string status)
		{
			CurrentGameStatus = (GameStatusEnum)Enum.Parse(typeof(GameStatusEnum), status);
		}

		public string GetGameState()
		{
			return CurrentGameStatus.ToString();
		}
	}
}
