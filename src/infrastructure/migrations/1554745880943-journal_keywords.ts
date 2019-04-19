import {MigrationInterface, QueryRunner} from "typeorm";

export class journalKeywords1554745880943 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `create table journal_keyword (
                keyword_id varchar(40) references keyword(id),
                journal_id varchar(40) references journal(id)
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `drop table journal_keywords_keyword;`
        );
    }

}
