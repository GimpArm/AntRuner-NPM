"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ant = /** @class */ (function () {
    function Ant() {
        this.Name = "No Name";
        this.Action = AntAction.Wait;
    }
    Ant.prototype.Initialize = function (mapWidth, mapHeight, color, startX, startY) { };
    Ant.prototype.Tick = function (state) { };
    return Ant;
}());
exports.Ant = Ant;
var AntAction;
(function (AntAction) {
    AntAction[AntAction["Wait"] = 0] = "Wait";
    AntAction[AntAction["MoveRight"] = 1] = "MoveRight";
    AntAction[AntAction["MoveDown"] = 2] = "MoveDown";
    AntAction[AntAction["MoveLeft"] = 3] = "MoveLeft";
    AntAction[AntAction["MoveUp"] = 4] = "MoveUp";
    AntAction[AntAction["EchoRight"] = 5] = "EchoRight";
    AntAction[AntAction["EchoDown"] = 6] = "EchoDown";
    AntAction[AntAction["EchoLeft"] = 7] = "EchoLeft";
    AntAction[AntAction["EchoUp"] = 8] = "EchoUp";
    AntAction[AntAction["ShieldOn"] = 9] = "ShieldOn";
    AntAction[AntAction["ShieldOff"] = 10] = "ShieldOff";
    AntAction[AntAction["DropBomb"] = 11] = "DropBomb";
    AntAction[AntAction["ShootRight"] = 12] = "ShootRight";
    AntAction[AntAction["ShootDown"] = 13] = "ShootDown";
    AntAction[AntAction["ShootLeft"] = 14] = "ShootLeft";
    AntAction[AntAction["ShootUp"] = 15] = "ShootUp";
})(AntAction = exports.AntAction || (exports.AntAction = {}));
var DamageValues;
(function (DamageValues) {
    DamageValues[DamageValues["Collision"] = 5] = "Collision";
    DamageValues[DamageValues["Impact"] = 10] = "Impact";
    DamageValues[DamageValues["Shot"] = 20] = "Shot";
    DamageValues[DamageValues["Bomb"] = 30] = "Bomb";
})(DamageValues = exports.DamageValues || (exports.DamageValues = {}));
var ItemBonusValues;
(function (ItemBonusValues) {
    ItemBonusValues[ItemBonusValues["Health"] = 25] = "Health";
    ItemBonusValues[ItemBonusValues["Shield"] = 25] = "Shield";
    ItemBonusValues[ItemBonusValues["Bomb"] = 4] = "Bomb";
})(ItemBonusValues = exports.ItemBonusValues || (exports.ItemBonusValues = {}));
var GameEvent;
(function (GameEvent) {
    GameEvent[GameEvent["Nothing"] = 0] = "Nothing";
    GameEvent[GameEvent["CollisionDamage"] = 1] = "CollisionDamage";
    GameEvent[GameEvent["ImpactDamageRight"] = 2] = "ImpactDamageRight";
    GameEvent[GameEvent["ImpactDamageDown"] = 4] = "ImpactDamageDown";
    GameEvent[GameEvent["ImpactDamageLeft"] = 8] = "ImpactDamageLeft";
    GameEvent[GameEvent["ImpactDamageUp"] = 16] = "ImpactDamageUp";
    GameEvent[GameEvent["ShotDamageRight"] = 32] = "ShotDamageRight";
    GameEvent[GameEvent["ShotDamageDown"] = 64] = "ShotDamageDown";
    GameEvent[GameEvent["ShotDamageLeft"] = 128] = "ShotDamageLeft";
    GameEvent[GameEvent["ShotDamageUp"] = 256] = "ShotDamageUp";
    GameEvent[GameEvent["BombDamage"] = 512] = "BombDamage";
    GameEvent[GameEvent["PickUpBomb"] = 1024] = "PickUpBomb";
    GameEvent[GameEvent["PickUpShield"] = 2048] = "PickUpShield";
    GameEvent[GameEvent["PickUpHealth"] = 4096] = "PickUpHealth";
    GameEvent[GameEvent["PickUpFlag"] = 8192] = "PickUpFlag";
    GameEvent[GameEvent["Dead"] = 16384] = "Dead";
    GameEvent[GameEvent["GameOver"] = 32768] = "GameOver";
})(GameEvent = exports.GameEvent || (exports.GameEvent = {}));
var Item;
(function (Item) {
    Item[Item["Empty"] = 0] = "Empty";
    Item[Item["SteelWall"] = 1] = "SteelWall";
    Item[Item["BrickWall"] = 2] = "BrickWall";
    Item[Item["Bomb"] = 3] = "Bomb";
    Item[Item["PowerUpBomb"] = 4] = "PowerUpBomb";
    Item[Item["PowerUpHealth"] = 5] = "PowerUpHealth";
    Item[Item["PowerUpShield"] = 6] = "PowerUpShield";
    Item[Item["RedAnt"] = 7] = "RedAnt";
    Item[Item["BlueAnt"] = 8] = "BlueAnt";
    Item[Item["GreenAnt"] = 9] = "GreenAnt";
    Item[Item["OrangeAnt"] = 10] = "OrangeAnt";
    Item[Item["PinkAnt"] = 11] = "PinkAnt";
    Item[Item["YellowAnt"] = 12] = "YellowAnt";
    Item[Item["GrayAnt"] = 13] = "GrayAnt";
    Item[Item["WhiteAnt"] = 14] = "WhiteAnt";
    Item[Item["RedHome"] = 15] = "RedHome";
    Item[Item["BlueHome"] = 16] = "BlueHome";
    Item[Item["GreenHome"] = 17] = "GreenHome";
    Item[Item["OrangeHome"] = 18] = "OrangeHome";
    Item[Item["PinkHome"] = 19] = "PinkHome";
    Item[Item["YellowHome"] = 20] = "YellowHome";
    Item[Item["GrayHome"] = 21] = "GrayHome";
    Item[Item["WhiteHome"] = 22] = "WhiteHome";
    Item[Item["Flag"] = 23] = "Flag";
})(Item = exports.Item || (exports.Item = {}));
var ItemColor;
(function (ItemColor) {
    ItemColor[ItemColor["None"] = 0] = "None";
    ItemColor[ItemColor["Red"] = 1] = "Red";
    ItemColor[ItemColor["Blue"] = 2] = "Blue";
    ItemColor[ItemColor["Green"] = 3] = "Green";
    ItemColor[ItemColor["Orange"] = 4] = "Orange";
    ItemColor[ItemColor["Pink"] = 5] = "Pink";
    ItemColor[ItemColor["Yellow"] = 6] = "Yellow";
    ItemColor[ItemColor["Gray"] = 7] = "Gray";
    ItemColor[ItemColor["White"] = 8] = "White";
})(ItemColor = exports.ItemColor || (exports.ItemColor = {}));
var EchoResponse = /** @class */ (function () {
    function EchoResponse(distance, item) {
        this.Distance = distance;
        this.Item = item;
    }
    return EchoResponse;
}());
exports.EchoResponse = EchoResponse;
var GameState = /** @class */ (function () {
    function GameState(tickNumber, event, response, antWithFlag, flagX, flagY) {
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
    return GameState;
}());
exports.GameState = GameState;
exports.default = Ant;
