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
exports.BookReview = void 0;
const typeorm_1 = require("typeorm");
const base_model_1 = require("../../../../core/base-model");
const book_entity_1 = require("../../books/entities/book.entity");
const user_entity_1 = require("../../../users/entities/user.entity");
let BookReview = class BookReview extends base_model_1.BaseModel {
    userId;
    bookId;
    rating;
    comment;
    date;
    book;
    user;
};
exports.BookReview = BookReview;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookReview.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookReview.prototype, "bookId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookReview.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 512, nullable: true }),
    __metadata("design:type", String)
], BookReview.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], BookReview.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => book_entity_1.Book, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'bookId' }),
    __metadata("design:type", book_entity_1.Book)
], BookReview.prototype, "book", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, { onDelete: 'CASCADE', eager: false }),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_entity_1.User)
], BookReview.prototype, "user", void 0);
exports.BookReview = BookReview = __decorate([
    (0, typeorm_1.Unique)(['userId', 'bookId']),
    (0, typeorm_1.Entity)('bookReviews')
], BookReview);
//# sourceMappingURL=bookReview.entity.js.map