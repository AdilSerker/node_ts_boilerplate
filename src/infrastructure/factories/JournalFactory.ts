import { Service } from "typedi";
import { JournalModel } from "../models/JournalModel";
import { Journal } from "../../domain/journal";

@Service()
export class JournalFactory {
    public create(journalModel: JournalModel): Journal {
        const { keywords: keywordModels, ...data } = journalModel;

        const keywords = keywordModels.map(item => item.value);

        return new Journal({ ...data, keywords })
    }

    public createList(journalModels: JournalModel[]): Journal[] {
        return journalModels.map(item => this.create(item));
    }
}
