
module.exports = {
    namespace: "staging",

    logger: console,
    logLevel: "info",
    logFormatter: "default",

    transporter: "TCP",
    requestTimeout: 0,
    requestRetry: 0,
    maxCallLevel: 100,
    heartbeatInterval: 5,
    heartbeatTimeout: 15,

    trackContext: false,
    gracefulStopTimeout: 2000,

    disableBalancer: false,

    registry: {
        strategy: "RoundRobin",
        preferLocal: true
    },

    circuitBreaker: {
        enabled: true,
        maxFailures: 3,
        halfOpenTime: 10 * 1000,
        failureOnTimeout: true,
        failureOnReject: true
    },

    cacher: "memory",
    serializer: null,

    validation: true,
    validator: null,

    metrics: false,
    metricsRate: 1,
    statistics: false,
    internalServices: true,

    hotReload: true,

    ServiceFactory: null,
    ContextFactory: null,

    created(broker) {
        broker.logger.info('created')
    },

    started(broker) {
        broker.logger.info('started')
    },

    stopped(broker) {
        broker.logger.info('stopped')
    },

    replCommand: [],

    transit: {
        maxQueueSize: 50 * 1000
    }
};