import { Connection } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { IDbConnector, Connector } from "../../components/db-connector";
import { Config, ConfigType } from "../../components/config";
import { jsonDataParser } from "./utils";

class Loader {
    protected connection: Connection;
    private dbConnector: IDbConnector = Connector.getInstance();

    public async init(): Promise<void> {
        this.connection = await this.dbConnector.getConnection(<PostgresConnectionOptions>(
            Config.getInstance().getConfig(ConfigType.Db)
        ));
    }

    public async close(): Promise<void> {
        await this.dbConnector.closeConnection();
        process.exit();
    }

    public async load(): Promise<void> {
        await this.init();

        const parsedData = await jsonDataParser('journalData.json');

        console.log(parsedData);

        await this.close();
    }

}

(async function() {
    const loader = new Loader();

    await loader.load()
})();
