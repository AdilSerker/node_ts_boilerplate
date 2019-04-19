export interface AuthorParams {
    id?: string;
    firstname: string;
    lastname: string;
    institution: string;
    email: string;
}

export interface JournalParams {
    id: string;
    title: string;
    journal: string;
    volume: number;
    number: number;
    pages: string;
    year: number;
    abstract: string;
    link: string;
    body: string;
    authors: AuthorParams[];
    keywords: string[];
}
