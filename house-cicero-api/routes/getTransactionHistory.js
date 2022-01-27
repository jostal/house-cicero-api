const getTransactionsRoutes = (app, fs) => {
  const dataPath = './data/transactionHistory.json';

  app.get('/getTransactionHistory', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data);
    })
  })
}

module.exports = getTransactionsRoutes;