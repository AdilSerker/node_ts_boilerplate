import { JsonController, Get, Param } from "routing-controllers";
import { Inject } from "typedi";
import { IJournalRepositoryToken, Journal } from "../../domain/journal";
import { IJournalRepository } from "../../domain/journal";

@JsonController("/api/journal")
export class JournalController {
    @Inject(IJournalRepositoryToken)
    private journalRepository: IJournalRepository;

    @Get("/:id")
    public async getJournalById(
        @Param("id") id: string
    ): Promise<Journal> {
        return this.journalRepository.getById(id);
    }

    @Get("/")
    public async getJournalList(): Promise<Journal[]> {
        return this.journalRepository.getList({});
    } 
}