require('dotenv').config();

const config = {
  dbUrl: process.env.DB_URL || `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PASSWORD}@cluster0.lipiocn.mongodb.net/?retryWrites=true&w=majority`,
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || 'app',
  filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;
