import { JsonController, Get, OnUndefined, Delete, Post, Body } from "routing-controllers";
import { Elasticsearch } from "../../components/elastic/elastic";
import { Inject } from "typedi";
import { IJournalRepositoryToken, IJournalRepository, Journal } from "../../domain/journal";
import { GetElastic } from "../../components/decorators/GetElastic";

@JsonController('/api/elastic')
export class ElasticController {
    @Inject(IJournalRepositoryToken)
    private journalRepository: IJournalRepository;

    @Post('/search')
    public async getBySearchString(
        @GetElastic() elastic: Elasticsearch,
        @Body() { searchString }: { searchString: string }
    ) {

    }

    @Get('/check')
    public async verifyIndices(
        @GetElastic() elastic: Elasticsearch
    ) {
        return elastic.verify();
    }

    @Get('/')
    public async getIndices(
        @GetElastic() elastic: Elasticsearch
    ) {
        return elastic.getIndices();
    }

    @Post('/')
    public async setIndex(
        @GetElastic() elastic: Elasticsearch,
        @Body() { index }: { index: number }
    ) {
        const journals = await this.journalRepository.getList();
        const res = await elastic.indexData<Journal>('library', 'journal', journals);

        return {
            indices: res.items
        }

    }

    @Delete('/')
    @OnUndefined(204)
    public async deleteAllIndices(
        @GetElastic() elastic: Elasticsearch
    ) {
        await elastic.deleteAllIndices();
    }
}