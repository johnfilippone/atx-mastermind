'use strict'

// Logger
import getLogger from './logger';
const logger = getLogger();

// Config
import loadConfig from './config';
const config = loadConfig();

// Web Server
import GraphQLServiceFactory from './graphql/graphql-service-factory';
const graphQLServiceFactory = new GraphQLServiceFactory(logger, config.graphql);
const graphQLService = graphQLServiceFactory.create();
graphQLService.start();
