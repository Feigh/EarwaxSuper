using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EarwaxSuper.Data
{
		public enum GameStatusEnum
		{
			waiting,
			started,
			finish
		}
	public class GameData
		{
			public string answer { get; set; }
		}

		public class StatusData
	{
			public string status { get; set; }
		}
}
