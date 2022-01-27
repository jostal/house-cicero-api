const payDebtRoutes = (app, fs) => {
  const dataPath = './data/owedAmounts.json';

  app.get('/payDebt', (req, res) => {
    deductAmount(req.body);
    appendHistory(req.body);
    res.json({message: 'Recieved.'});
  })

  async function deductAmount(data) {
    const currentAmounts = JSON.parse(fs.readFileSync(dataPath));
    const amountToDeduct = data.amount;
    currentAmounts[data.paidBy][0][data.paid] = currentAmounts[data.paidBy][0][data.paid] - amountToDeduct;
    fs.writeFileSync(dataPath, JSON.stringify(currentAmounts));
  }
  
  async function appendHistory(data) {
    const hist = JSON.parse(fs.readFileSync('./data/transactionHistory.json'));
    hist['transactions'].push(data);
    console.log(hist);
    fs.writeFileSync('./data/transactionHistory.json', JSON.stringify(hist));
  }
}

module.exports = payDebtRoutes;