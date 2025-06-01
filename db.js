const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    connectionString: `postgresql://saidalo:qtK5eea1arM8fUlqScWUTmsquV8yQiHn@dpg-d0th6gs9c44c739g3c50-a.oregon-postgres.render.com/user_manage_qn7k`,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;