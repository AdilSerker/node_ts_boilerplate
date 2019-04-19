import { Author } from "./Author";
import { Token } from "typedi";

export interface IAuthorRepository {
    getById: (id: string) => Promise<Author>;
    getList: (query: any) => Promise<Author[]>;
    save: (journal: Author) => Promise<Author>;
    delete: (id: string) => Promise<void>;
}

export const IAuthorRepositoryToken = new Token<IAuthorRepository>();
