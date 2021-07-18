using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EarwaxSuper.Data
{
	public class GameState : IGameState
	{
		private List<string> PlayerInput { get; set; }
		public GameState()
		{
			PlayerInput = new List<string>();
		}

		public void SavePlayerInput(string value)
		{
			PlayerInput.Add(value);
		}

		public List<string> GetPlayerInputs()
		{
			return PlayerInput;
		}
	}
}
