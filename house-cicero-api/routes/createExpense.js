const createExpenseRoutes = (app, fs) => {
  const dataPath = './data/owedAmounts.json';

  app.get('/createExpense', (req, res) => {
    calculateDebts(req.body);
    appendHistory(req.body);
    res.send(JSON.stringify({message: 'Expense Created'}));
  })

  async function calculateDebts(data) {
    const currentAmounts = JSON.parse(fs.readFileSync(dataPath));
    const owedByEach = Math.round(((parseFloat(data.amount) / data.splitWith.length) + Number.EPSILON) * 100) / 100;
    await data.splitWith.map(p => {
      currentAmounts[p][0][data.paidBy] = owedByEach + currentAmounts[p][0][data.paidBy];
    });
  
    fs.writeFileSync(dataPath, JSON.stringify(currentAmounts));
  }
  
  async function appendHistory(data) {
    const hist = JSON.parse(fs.readFileSync('./data/transactionHistory.json'));
    hist['transactions'].push(data);
    console.log(hist);
    fs.writeFileSync('./data/transactionHistory.json', JSON.stringify(hist));
  }
}

module.exports = createExpenseRoutes;