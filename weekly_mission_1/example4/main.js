const Logger = require('./logger');

const dbLogger = new Logger('BD');

dbLogger.info('This is a informational message');


const accessLogger = new Logger('ACCESS');

accessLogger.verbose('This a verbose message');