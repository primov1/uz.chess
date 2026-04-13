import { MatchType, WinnerType } from '../../entities/match.entity';
export declare class MatchListAdminDto {
    id: number;
    firstPlayerId: number;
    firstPlayerResult: number;
    secondPlayerId: number;
    secondPlayerResult: number;
    type: MatchType;
    moves: number;
    date: string;
    winner: WinnerType;
}
