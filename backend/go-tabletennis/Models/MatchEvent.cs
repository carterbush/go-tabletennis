using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace go_tabletennis.Models
{
    public class MatchEvent
    {
        public enum EventType
        {
            MatchStart,
            GameStart,
            Serve,
            Fault,
            Let,
            Foul,
            PointScored,
            GameEnd,
            MatchEnd,
        }

        public Guid Id { get; set; }
        public EventType Type { get; set; }
        public Guid? Context { get; set; }
    }
}
