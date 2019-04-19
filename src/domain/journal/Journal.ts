import { AuthorParams, JournalParams } from "../../types";
import { v4 } from "uuid";

export class Journal {
    public id: string;
    public title: string;
    public journal: string;
    public volume: number;
    public number: number;
    public pages: string;
    public year: number;
    public abstract: string;
    public link: string;
    public body: string;
    public authors: AuthorParams[];
    public keywords: string[];

    public constructor(params: JournalParams) {
        const {
            id = v4(),
            title,
            journal,
            volume,
            number,
            pages,
            year,
            abstract,
            link,
            body,
            authors,
            keywords
        } = params;


        this.id = id;
        this.title = title;
        this.journal = journal;
        this.volume = volume;
        this.number = number;
        this.pages = pages;
        this.year = year;
        this.abstract = abstract;
        this.link = link;
        this.body = body;
        this.authors = authors;
        this.keywords = keywords;
    }

}
