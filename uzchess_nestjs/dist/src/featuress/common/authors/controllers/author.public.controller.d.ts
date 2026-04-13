import { AuthorPublicService } from '../service/author.public.service';
import { AuthorListPublicDto } from '../dtos/public/author.list.public.dto';
import { AuthorDetailPublicDto } from '../dtos/public/author.detail.public.dto';
export declare class AuthorPublicController {
    private readonly service;
    constructor(service: AuthorPublicService);
    getAll(): Promise<AuthorListPublicDto[]>;
    getOne(id: number): Promise<AuthorDetailPublicDto>;
}
