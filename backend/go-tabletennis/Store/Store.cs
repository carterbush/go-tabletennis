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
            return new Store();
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
    }
}
