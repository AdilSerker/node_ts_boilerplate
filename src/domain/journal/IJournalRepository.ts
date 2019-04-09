import { Journal } from "./Journal";

export interface IJournalRepository {
    getById: (id: string) => Promise<Journal>;
    getList: (query: any) => Promise<Journal[]>;
    save: (journal: Journal) => Promise<Journal>;
    delete: (id: string) => Promise<void>;
}