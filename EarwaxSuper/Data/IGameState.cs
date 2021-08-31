using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EarwaxSuper.Data
{
	public interface IGameState
	{ 
		public void SavePlayerInput(string value);
		public List<string> GetPlayerInputs();
		public void AddPlayer(string name);
		public List<string> GetPlayerList();
		public void ChangeGameState(string state);
		public GameStatusEnum GetGameState();
	}
}
