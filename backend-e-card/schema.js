const zod = require('zod');

const schema = zod.object({
    name: zod.string(),
    description: zod.string(),
    interests: zod.string(),
    gituser : zod.string(),
    socials: zod.array(zod.object({ social: zod.string(), url: zod.string() }))
})

module.exports = schema;
