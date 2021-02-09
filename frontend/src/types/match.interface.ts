import MatchEvent from './matchEvent.interface'
import Player from './player.interface'

export default interface Match {
    id: string,
    scheduledStartTime: string,
    player1: Player,
    player2: Player,
    numGames: number,
    events: MatchEvent[],
}