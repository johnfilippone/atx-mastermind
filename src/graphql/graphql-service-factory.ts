'use strict'

import GraphQLService from './graphql-service';

class GraphQLServiceFactory {
    _logger: any
    _config: any
    constructor(logger, config) {
        this._logger = logger;
        this._config = config;
    }

    create(logger=this._logger, config=this._config) {
        return new GraphQLService(logger, config);
    }
}

export default GraphQLServiceFactory;


