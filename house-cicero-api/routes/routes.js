const createExpenseRoutes = require('./createExpense');
const owedRoutes = require('./getOwedAmounts');
const getTransactionsRoutes = require('./getTransactionHistory');
const payDebtRoutes = require('./payDebt');

const appRouter = (app, fs) => {
  app.get('/', (req, res) =>  {
    res.send('Welcome to the dev api-server');
  });
  owedRoutes(app, fs);
  createExpenseRoutes(app, fs);
  getTransactionsRoutes(app, fs);
  payDebtRoutes(app, fs);
};


module.exports = appRouter;