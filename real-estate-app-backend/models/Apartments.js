"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartments = void 0;
var typeorm_1 = require("typeorm");
var Apartments = /** @class */ (function () {
    function Apartments() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Apartments.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Apartments.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Apartments.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Apartments.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Apartments.prototype, "renting_price", void 0);
    __decorate([
        (0, typeorm_1.Column)()
    ], Apartments.prototype, "buying_price", void 0);
    Apartments = __decorate([
        (0, typeorm_1.Entity)()
    ], Apartments);
    return Apartments;
}());
exports.Apartments = Apartments;
