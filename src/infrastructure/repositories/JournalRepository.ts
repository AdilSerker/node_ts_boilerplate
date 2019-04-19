import Container, { Service, Inject } from "typedi";
import { Journal, IJournalRepository, IJournalRepositoryToken } from "../../domain/journal";
import { getRepository } from "typeorm";
import { JournalModel } from "../models/JournalModel";
import { JournalFactory } from "../factories/JournalFactory";

@Service(IJournalRepositoryToken)
export class JournalRepository implements IJournalRepository {

    private journalFactory: JournalFactory = Container.get(JournalFactory);

    public async getById(id: string): Promise<Journal> {
        const journal = await getRepository(JournalModel).findOne({
            where: { id },
            relations: ["authors", "keywords"]
        });

        return this.journalFactory.create(journal);
    }

    public async getList(query: any = {}): Promise<Journal[]> {
        const journals = await getRepository(JournalModel).find({
            relations: ["authors", "keywords"]
        });

        return this.journalFactory.createList(journals);
    }

    public async save(journal: Journal): Promise<Journal> {
        return null;
    }

    public async delete(id: string): Promise<void> {
        
    }
}