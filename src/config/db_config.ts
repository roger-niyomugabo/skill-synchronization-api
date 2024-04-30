import dotenv from 'dotenv';
dotenv.config();
// Config for the DB and the Sequelize CLI
const db_config = {
    'development': {
        'username': process.env.SKILL_SYNC_DB_USER || 'postgres',
        'password': process.env.SKILL_SYNC_DB_PASSWORD || 'postgres',
        'database': process.env.SKILL_SYNC_DB_NAME || 'skill_sync',
        'host': process.env.SKILL_SYNC_DB_HOST || 'localhost',
        'port': parseInt(process.env.SKILL_SYNC_DB_PORT || '5432'),
        'dialect': 'postgres',
    },
    // Hardcode test_env vars so test functions do not get into any other system
    'test': {
        'username': 'skill_sync_user',
        'password': 'skill_sync_pass',
        'database': 'skill_sync_database',
        'host': 'skill_sync_db',
        'port': 5432,
        'dialect': 'postgres',
    },
    'production': {
        'username': process.env.SKILL_SYNC_DB_USER,
        'password': process.env.SKILL_SYNC_DB_PASSWORD,
        'database': process.env.SKILL_SYNC_DB_NAME,
        'host': process.env.SKILL_SYNC_DB_HOST,
        'port': parseInt(process.env.SKILL_SYNC_DB_PORT),
        'dialect': 'postgres',
    },
};

export { db_config };
