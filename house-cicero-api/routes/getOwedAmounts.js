const owedAmountsRoutes = (app, fs) => {
  const dataPath = './data/owedAmounts.json';

  app.get('/getOwedAmounts', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.stringify(data));
    })
  })
}

module.exports = owedAmountsRoutes;