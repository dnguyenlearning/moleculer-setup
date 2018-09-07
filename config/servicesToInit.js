
const services = {
    local: ['api', 'articles', 'email', 'feeds', 'metrics'],
    staging: ['api', 'articles', 'email', 'feeds', 'metrics'],
    production: ['api', 'articles', 'email', 'feeds', 'metrics'],
    qa: ['api', 'articles', 'email', 'feeds', 'metrics'],
}

module.exports = (env) => {
    return services[env];
};