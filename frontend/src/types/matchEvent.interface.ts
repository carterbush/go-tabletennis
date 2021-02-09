export default interface MatchEvent {
    id: string,
    type: MatchEventType,
    context: string | null
}

export enum MatchEventType {
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