using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace go_tabletennis.Models
{
    public class Match
    {
        public Guid Id { get; set; }
        public DateTime ScheduledStartTime { get; set; }
        public Player Player1 { get; set; }
        public Player Player2 { get; set; }
        public int NumGames { get; set; }
        public List<MatchEvent> Events { get; set; }
    }
}
