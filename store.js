// Helper Funcs
const getAccountBalances = (transactions, startingBalance) => {
    return transactions.reduce((balanceInfo, transaction) => {
        if (transaction.Billed && Number(transaction.Amount)) {
            let subtracted = (Number(balanceInfo.endingBalance) - Number(transaction.Amount)).toFixed(2);

            balanceInfo.endingBalance = subtracted;
        } else if (!transaction.Billed && Number(transaction.Amount)) {
            let subtracted = (Number(balanceInfo.endingBalance) - Number(transaction.Amount)).toFixed(2);
            let added = (Number(balanceInfo.pendingBalance) + Number(transaction.Amount)).toFixed(2);

            balanceInfo.pendingBalance = added;
            balanceInfo.endingBalance = subtracted;
        }

        return balanceInfo;
    }, { pendingBalance: 0, endingBalance: startingBalance })
}



// Actions
const fetchAccountTransactions = ({ commit, state }) => {
    let transactions = [ ...exampleTransactions.Statement.Transactions, ...exampleTransactions.Statement.NotSettled ];

    commit('setAccountInfo', transactions);
    commit('setTransactionsList', transactions);
    commit('setTransactionsListMeta', accountTransactions.meta);
}


// Mutations
const setAccountInfo = (state, transactions) => {
    let mostRecentTransaction = transactions.reduce((highest, transaction) => {
        let currentHighest = new Date(highest.TransactionDate).getTime();
        let transactionDate = new Date(transaction.TransactionDate).getTime();

        return transactionDate > currentHighest ? transaction : highest;
    }, { TransactionDate: 0 });
    
    return state.accountInfo = { 
        accountNum: mostRecentTransaction.AccountNumber, 
        balance: mostRecentTransaction.AvailableBalance,
        ...getAccountBalances(transactions, mostRecentTransaction.AvailableBalance)
    };
}

const setTransactionsList = (state, transactions) => {
    return state.transactions = transactions;
}

const setTransactionsListMeta = (state, meta) => {
    return state.transactionsPageNums = newPageNums(meta.maxPage, meta.pageNum);
}


const store = new Vuex.Store({
	state: {
        accountInfo: {},
        transactions: [],
        transactionsPageNums: []
    },
	actions: {
        fetchAccountTransactions
    },
	mutations: {
        setAccountInfo,
        setTransactionsList, 
        setTransactionsListMeta
    }
});