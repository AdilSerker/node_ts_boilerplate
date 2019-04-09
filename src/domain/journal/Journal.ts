import { Author, JournalParams } from "../../types";

export class Journal {
    public id: string;
    public title: string;
    public journal: string;
    public value: number;
    public number: number;
    public pages: string;
    public year: number;
    public abstract: string;
    public link: string;
    public body: string;
    public authors: Author[];
    public keywords: string[];

    public constructor(params: JournalParams) {
        const { id, title, journal, value, number, pages, year, abstract, link, body, authors, keywords } = params;

        this.id = id;
        this.title = title;
        this.journal = journal;
        this.value = value;
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
