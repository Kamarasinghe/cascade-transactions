<-------------------------------------------------------------------->

# Assumed that this is a safe API

- Find the newest Transaction/NotSettled through iteration (incase they aren't in order)
- Set the AvailableBalance from the most recent transaction as the starting balanace
- Iterate through Transactions/NotSettled
    - Create variable for tracking pending transactions (not billed)
    - Create variable for ending balanace and set it equal to starting balance
    - If billed 
        - Subtract from ending balance 
    - Not billed
        - Subtract from starting balance
        - Add to pending transactions var
- Set endingBalance in store
- Set pendingAmount in store


# Important info to show on frontend

- Starting balance
- Ending balance
- Account number
- Merchant name
- Transaction description
- Transaction date
- Amount