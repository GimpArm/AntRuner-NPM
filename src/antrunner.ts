export class Ant {
  public Name: string;
  public Action: AntAction;
  public Initialize(mapWidth: number, mapHeight: number, color: ItemColor, startX: number, startY: number) {}

  public Tick(state: GameState) {}
}

export enum AntAction {
  Wait = 0,
  MoveRight = 1,
  MoveDown = 2,
  MoveLeft = 3,
  MoveUp = 4,
  EchoRight = 5,
  EchoDown = 6,
  EchoLeft = 7,
  EchoUp = 8,
  ShieldOn = 9,
  ShieldOff = 10,
  DropBomb = 11,
  ShootRight = 12,
  ShootDown = 13,
  ShootLeft = 14,
  ShootUp = 15,
}

export enum DamageValues {
  Collision = 5,
  Impact = 10,
  Shot = 20,
  Bomb = 30,
}

export enum ItemBonusValues {
  Health = 25,
  Shield = 25,
  Bomb = 4,
}

export enum GameEvent {
  Nothing = 0,
  CollisionDamage = 1 << 0,
  ImpactDamageRight = 1 << 1,
  ImpactDamageDown = 1 << 2,
  ImpactDamageLeft = 1 << 3,
  ImpactDamageUp = 1 << 4,
  ShotDamageRight = 1 << 5,
  ShotDamageDown = 1 << 6,
  ShotDamageLeft = 1 << 7,
  ShotDamageUp = 1 << 8,
  BombDamage = 1 << 9,
  PickUpBomb = 1 << 10,
  PickUpShield = 1 << 11,
  PickUpHealth = 1 << 12,
  PickUpFlag = 1 << 13,
  Dead = 1 << 14,
  GameOver = 1 << 15,
}

export enum Item {
  Empty = 0,
  SteelWall = 1,
  BrickWall = 2,
  Bomb = 3,
  PowerUpBomb = 4,
  PowerUpHealth = 5,
  PowerUpShield = 6,
  RedAnt = 7,
  BlueAnt = 8,
  GreenAnt = 9,
  OrangeAnt = 10,
  PinkAnt = 11,
  YellowAnt = 12,
  GrayAnt = 13,
  WhiteAnt = 14,
  RedHome = 15,
  BlueHome = 16,
  GreenHome = 17,
  OrangeHome = 18,
  PinkHome = 19,
  YellowHome = 20,
  GrayHome = 21,
  WhiteHome = 22,
  Flag = 23,
}

export enum ItemColor {
  None = 0,
  Red = 1,
  Blue = 2,
  Green = 3,
  Orange = 4,
  Pink = 5,
  Yellow = 6,
  Gray = 7,
  White = 8,
}

export class EchoResponse {
  public readonly Distance: number;
  public readonly Item: Item;

  public constructor(distance: number, item: Item) {
    this.Distance = distance;
    this.Item = item;
  }
}

export class GameState {
  public readonly TickNumber: number;
  public readonly Event: GameEvent;
  public readonly Response: EchoResponse;
  public readonly HasFlag: boolean;
  public readonly AntWithFlag: ItemColor;
  public readonly FlagX: number;
  public readonly FlagY: number;

  public constructor(tickNumber: number, event: GameEvent, response?: EchoResponse, antWithFlag?: ItemColor, flagX?: number, flagY?: number) {
    this.TickNumber = tickNumber;
    this.Event = event;
    if (response) {
      this.Response = response;
    }
    if (antWithFlag) {
      this.HasFlag = true;
      this.AntWithFlag = antWithFlag;
      this.FlagX = Number(flagX);
      this.FlagY = Number(flagY);
    }
  }
}
