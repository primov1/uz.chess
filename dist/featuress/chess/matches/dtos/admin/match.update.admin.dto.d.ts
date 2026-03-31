import { MatchType, WinnerType } from '../../entities/match.entity';
export declare class MatchUpdateAdminDto {
    firstPlayerResult?: number;
    secondPlayerResult?: number;
    type?: MatchType;
    moves?: number;
    date?: string;
    winner?: WinnerType;
}
