import { getRepository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { readFileSync } from 'fs';
import * as path from 'path';

import { JournalModel } from '../../infrastructure/models/JournalModel';
import { KeywordsModel } from '../../infrastructure/models/KeywordsModel';
import { v4 } from 'uuid';
import { Author } from '../../types';
import { AuthorModel } from '../../infrastructure/models/AuthorModel';

export const jsonDataParser = async (fileName: string): Promise<any> => {
    const filePath = path.join(__dirname, '../../../fixtures/', fileName);
    const data = await readFileSync(filePath);

    return JSON.parse(data.toString());
}

export const jouranlSaver = async (journalModel: JournalModel): Promise<JournalModel> => {
    const journalFromDb = await getRepository(JournalModel).findOne({ where: { id: journalModel.id } });
    if (journalFromDb) {
        return journalFromDb;
    }

    return getRepository(JournalModel).save(plainToClass(JournalModel, journalModel));
}

export const keywordSaver = async (keyword: string): Promise<string> => {
    const keywordFromDb = await getRepository(KeywordsModel).findOne({ where: { value: keyword } });
    if (keywordFromDb) {
        return keywordFromDb.value;
    }

    const keywordForSave = {
        id: v4(),
        value: keyword
    }

    return (await getRepository(KeywordsModel).save(plainToClass(KeywordsModel, keywordForSave))).value;
}

export const authorSaver = async (author: Author): Promise<Author> => {
    const authorFromDb = await getRepository(AuthorModel).findOne({ where: { author }});
    if (authorFromDb) {
        const { id, ...data } = authorFromDb;
        return { ...data };
    }

    const savedAuthor = await getRepository(AuthorModel).save(plainToClass(AuthorModel, {
        id: v4(),
        ...author
    }));
    const { id, ...data } = savedAuthor;
    return { ...data };
}
