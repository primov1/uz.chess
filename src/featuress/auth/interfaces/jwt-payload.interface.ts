export interface JwtPayload {
  sub: number; // user.id
  login: string;
  role: string;
  iat?: number;
  exp?: number;
}
