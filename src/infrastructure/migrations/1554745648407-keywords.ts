import {MigrationInterface, QueryRunner} from "typeorm";

export class keywords1554745648407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `create table keyword (
                id varchar(40) primary key,
                value varchar(255) not null
            );`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `drop table keyword;`
        );
    }

}
