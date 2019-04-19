import { Journal } from "./Journal";
import { Token } from "typedi";

export interface IJournalRepository {
    getById: (id: string) => Promise<Journal>;
    getList: (query?: any) => Promise<Journal[]>;
    save: (journal: Journal) => Promise<Journal>;
    delete: (id: string) => Promise<void>;
}

export const IJournalRepositoryToken = new Token<IJournalRepository>();
