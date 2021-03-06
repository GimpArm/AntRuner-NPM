export declare class Ant {
    Name: string;
    Action: AntAction;
    Initialize(mapWidth: number, mapHeight: number, color: ItemColor, startX: number, startY: number): void;
    Tick(state: GameState): void;
}
export declare enum AntAction {
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
    ShootUp = 15
}
export declare enum DamageValues {
    Collision = 5,
    Impact = 10,
    Shot = 20,
    Bomb = 30
}
export declare enum ItemBonusValues {
    Health = 25,
    Shield = 25,
    Bomb = 4
}
export declare enum GameEvent {
    Nothing = 0,
    CollisionDamage = 1,
    ImpactDamageRight = 2,
    ImpactDamageDown = 4,
    ImpactDamageLeft = 8,
    ImpactDamageUp = 16,
    ShotDamageRight = 32,
    ShotDamageDown = 64,
    ShotDamageLeft = 128,
    ShotDamageUp = 256,
    BombDamage = 512,
    PickUpBomb = 1024,
    PickUpShield = 2048,
    PickUpHealth = 4096,
    PickUpFlag = 8192,
    Dead = 16384,
    GameOver = 32768
}
export declare enum Item {
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
    Flag = 23
}
export declare enum ItemColor {
    None = 0,
    Red = 1,
    Blue = 2,
    Green = 3,
    Orange = 4,
    Pink = 5,
    Yellow = 6,
    Gray = 7,
    White = 8
}
export declare class EchoResponse {
    readonly Distance: number;
    readonly Item: Item;
    constructor(distance: number, item: Item);
}
export declare class GameState {
    readonly TickNumber: number;
    readonly Event: GameEvent;
    readonly Response: EchoResponse;
    readonly HasFlag: boolean;
    readonly AntWithFlag: ItemColor;
    readonly FlagX: number;
    readonly FlagY: number;
    constructor(tickNumber: number, event: GameEvent, response?: EchoResponse, antWithFlag?: ItemColor, flagX?: number, flagY?: number);
}
export default Ant;
