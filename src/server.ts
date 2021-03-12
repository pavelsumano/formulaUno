import express from 'express';
import compression from 'compression';
//import cors from 'cors';
var cors = require('cors');
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { dataSources } from './data';
import expressPlayground from 'graphql-playground-middleware-express';

const app = express();

app.use('*', cors());

app.use(compression());


const server =  new ApolloServer({
    schema,
    introspection: true,
    dataSources: () => ({
        seasons: new dataSources.SeasonsData(),
        races: new dataSources.racesData(),
        drivers: new dataSources.DriversData(),
        circuits: new dataSources.CircuitsData(),
    })
});

server.applyMiddleware({ app });
const httpServer = createServer(app);

app.use('/', expressPlayground({
    endpoint: '/graphql'
}
));

const PORT =5300;

app.listen(
    { port : PORT },
    ()=> console.log(`API GraphQL http://localhost:${PORT}/graphql`)
);