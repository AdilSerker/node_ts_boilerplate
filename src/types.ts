export interface Author {
    firstname: string;
    lastname: string;
    institution: string;
    email: string;
}

export interface JournalParams {
    id: string;
    title: string;
    journal: string;
    value: number;
    number: number;
    pages: string;
    year: number;
    abstract: string;
    link: string;
    body: string;
    authors: Author[];
    keywords: string[];
}
