import { dataSource } from 'database/config/data-source';
import appConfig from 'src/common/config/app.config';
import { AppEnvironmental } from 'src/common/enums/app-environmentals.enum';

const clear = async () => {
  if (appConfig.environment === AppEnvironmental.Production) {
    throw new Error('Clear is not allowed in production.');
  }

  try {
    await dataSource.initialize();
  } catch (e) {
    console.log(e);
    console.log('Fatal Error: Could not connect to database');
    process.exit(1);
  }

  try {
    await dataSource.dropDatabase();
  } catch (e) {
    console.log(e);
    console.log('Fatal Error: Could not drop database');
    process.exit(1);
  }

  console.log('Database cleared');
  process.exit();
};

clear();
