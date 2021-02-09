using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using go_tabletennis.Models;

namespace go_tabletennis.Requests
{
    public class PostMatchEventRequest
    {
        public MatchEvent.EventType Type { get; set; }
        public Guid? Context { get; set; }
        public Guid ReporterId { get; set; }
    }
}
