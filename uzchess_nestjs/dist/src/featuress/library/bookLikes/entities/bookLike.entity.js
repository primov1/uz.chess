"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookLike = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const book_entity_1 = require("../../books/entities/book.entity");
const user_entity_1 = require("../../../users/entities/user.entity");
let BookLike = class BookLike extends base_model_1.BaseModel {
    userId;
    bookId;
    date;
    book;
    user;
};
exports.BookLike = BookLike;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookLike.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookLike.prototype, "bookId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BookLike.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'bookId' }),
    __metadata("design:type", book_entity_1.Book)
], BookLike.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], BookLike.prototype, "user", void 0);
exports.BookLike = BookLike = __decorate([
    (0, typeorm_1.Unique)(['userId', 'bookId']),
    (0, typeorm_1.Entity)('bookLikes')
], BookLike);
//# sourceMappingURL=bookLike.entity.js.map