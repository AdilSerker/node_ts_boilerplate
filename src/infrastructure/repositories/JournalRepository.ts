import { Service } from "typedi";
import { Journal, IJournalRepository } from "../../domain/journal";


@Service()
export class JournalRepository implements IJournalRepository {
    public async getById(id: string): Promise<Journal> {
        return null;
    }

    public async getList(id: string): Promise<Journal[]> {
        return null;
    }

    public async save(journal: Journal): Promise<Journal> {
        return null;
    }

    public async delete(id: string): Promise<void> {
        
    }
}