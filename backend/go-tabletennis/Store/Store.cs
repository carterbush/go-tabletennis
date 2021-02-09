using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using go_tabletennis.Models;

namespace go_tabletennis
{
    public interface IStore
    {
        public IEnumerable<Match> GetAllMatches();
        public IEnumerable<Reporter> GetAllReporters();
        public Match GetMatch(Guid id);
    }

    public class Store : IStore
    {
        private readonly Dictionary<Guid, Match> Matches = new Dictionary<Guid, Match>();
        private readonly Dictionary<Guid, Player> Players = new Dictionary<Guid, Player>();
        private readonly Dictionary<Guid, Reporter> Reporters = new Dictionary<Guid, Reporter>();

        public static Store Create()
        {
            var store = new Store();

            // Add some dummy data: players, matches and reporters
            var jess = store.CreatePlayer("Jessica Jones");
            var matt = store.CreatePlayer("Matthew Murdock");
            var luke = store.CreatePlayer("Luke Cage");
            var dan = store.CreatePlayer("Danny Rand");

            store.CreateMatch(DateTime.Now.AddHours(1), jess, matt, 3);
            store.CreateMatch(DateTime.Now.AddHours(2), jess, luke, 5);
            store.CreateMatch(DateTime.Now.AddHours(3), matt, dan, 3);
            store.CreateMatch(DateTime.Now.AddHours(4), dan, luke, 11);

            store.CreateReporter("Mum");
            store.CreateReporter("Stanley the Dog");
            store.CreateReporter("Best Employee No 5");

            return store;
        }

        public IEnumerable<Match> GetAllMatches()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Reporter> GetAllReporters()
        {
            throw new NotImplementedException();
        }

        public Match GetMatch(Guid id)
        {
            throw new NotImplementedException();
        }

        private Guid CreateMatch(DateTime startTime, Guid p1, Guid p2, int numGames)
        {
            // Might fail
            var player1 = this.Players[p1];
            var player2 = this.Players[p2];

            var id = Guid.NewGuid();
            this.Matches[id] = new Match()
            {
                Id = id,
                ScheduledStartTime = startTime,
                Player1 = player1,
                Player2 = player2,
                NumGames = numGames,
                Events = new List<MatchEvent>(),
                ReporterId = null
            };
            return id;
        }

        private Guid CreatePlayer(string name)
        {
            var id = Guid.NewGuid();
            this.Players[id] = new Player()
            {
                Id = id,
                Name = name,
            };
            return id;
        }

        private Guid CreateReporter(string name)
        {
            var id = Guid.NewGuid();
            this.Reporters[id] = new Reporter()
            {
                Id = id,
                Name = name,
            };
            return id;
        }

    }
}
