import { BaseModel } from '../../../../core/base-model';
import { Player } from '../../players/entities/player.entity';
export declare enum MatchType {
    CLASSIC = "classic",
    RAPID = "rapid",
    BLITZ = "blitz"
}
export declare enum WinnerType {
    FIRST = "first",
    SECOND = "second",
    DRAW = "draw"
}
export declare class Match extends BaseModel {
    firstPlayerId: number;
    firstPlayerResult: number;
    secondPlayerId: number;
    secondPlayerResult: number;
    type: MatchType;
    moves: number;
    date: string;
    winner: WinnerType;
    firstPlayer: Player;
    secondPlayer: Player;
}
