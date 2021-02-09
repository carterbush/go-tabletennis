using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using go_tabletennis;
using go_tabletennis.Models;
using go_tabletennis.Requests;

namespace go_tabletennis.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MatchesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Match> GetMatches()
        {
            return Program.Store.GetAllMatches();
        }

        [HttpGet]
        [Route("{id:guid}")]
        public ActionResult<Match> GetMatch(Guid id)
        {
            if (!Program.Store.TryGetMatch(id, out var match))
            {
                return NotFound();
            }

            return match;
        }

        [HttpPost]
        [Route("{matchId:guid}/event")]
        public ActionResult<Match> PostMatchEvent(Guid matchId, PostMatchEventRequest e)
        {
            if (!Program.Store.TryGetMatch(matchId, out var match))
            {
                return NotFound();
            }

            // TODO: Reporter/context guids aren't validated

            match.Events.Add(new MatchEvent()
            {
                Id = Guid.NewGuid(),
                Type = e.Type,
                Context = e.Context,
                ReporterId = e.ReporterId,
            });

            return match;
        }
    }
}
