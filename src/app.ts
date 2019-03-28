import 'reflect-metadata';

import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import * as morgan from 'morgan';
import * as bodyParser from "body-parser";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

import { Config, ConfigType, ServerConfig } from "./components/config";
import "./components/di";
import { middlewares } from "./components/middlewares";
import { createConnection } from 'typeorm';

const dbConfig = <PostgresConnectionOptions>Config.getInstance().getConfig(ConfigType.Db);
const serverConfig = <ServerConfig>Config.getInstance().getConfig(ConfigType.Server);

useContainer(Container);
const app = createExpressServer({
    controllers: [__dirname + '/application/web/*.js'],
    middlewares
});

app.use(morgan('dev'));
app.use(bodyParser.json());

async function startServer() {
	const connection = await createConnection(dbConfig);

	app.listen(serverConfig, () => {
		console.info(`\nServer started at http://${serverConfig.host}:${serverConfig.port}`);

		connection.isConnected ?
            console.info("DB " + dbConfig.database + " is connected\n") :
            console.info("DB " + dbConfig.database + " isn't connected\n");
	});
}

startServer();

