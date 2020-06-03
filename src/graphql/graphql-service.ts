'use strict'

import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';

class GraphQLService {
    _logger: any
    _config: any
    constructor(logger, config) {
        this._logger = logger;
        this._config = config;
    }

    start() {
        const typeDefs = gql`
            type Query {
                test: String!
            }
        `;
        const resolvers = {
            Query: {
                test: async (obj, args) => {
                    return 'it works';
                }
            },
        };
        const graphQLServer = new ApolloServer({ typeDefs, resolvers });

        const app = express();
        app.use(morgan('combined'));
        graphQLServer.applyMiddleware({ app });
        app.listen({ port: this._config.port }, () => {
            this._logger.info('Serving graphql at http://localhost:' + this._config.port + graphQLServer.graphqlPath)
        });
    }
}

export default GraphQLService;
