const AccountTransactionsTemplate = `<div class="container">
	<div class="row justify-content-end">
		<div class="col-4 col-md-3 col-lg-3 page-selection-container">
			Page Size:
			<a class="page-size-selection" @click="pageSizeSelection(2, $event)">2</a>
			<a class="page-size-selection" @click="pageSizeSelection(4, $event)">4</a>
			<a class="page-size-selection" @click="pageSizeSelection(6, $event)">6</a>
			<a class="page-size-selection" @click="pageSizeSelection(8, $event)">8</a>
			<a class="page-size-selection" @click="pageSizeSelection('all', $event)">All</a>
		</div>
		<div class="col-6 col-md-5 col-lg-4 col-xl-3 pagination-container">
			<pagination-comp :last-page="maxPage" :page-nums="pageNums" :page-selection="pageSelection"></pagination-comp>
		</div>
	</div>
	<div class="card" v-for="transaction in transactions">
		<div class="row no-gutters">
			<div class="card-header full-width">
				<div class="row">
					<div class="col-md-10 col-9">
						[{ transaction.MerchantName }]
					</div>
					<div class="col right-text-align" v-bind:class="{ billed: transaction.Billed, 'not-billed': !transaction.Billed }" data-toggle="tooltip" :title="[ transaction.Billed ? 'Billed' : 'Not Billed' ]">
						$[{ transaction.Amount }]
					</div>
				</div>
			</div>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-7 col-sm-8 col-md-9 col-lg-10">
					<blockquote class="blockquote mb-0">
						<p>[{ transaction.Description }]</p>
						<footer class="blockquote-footer"><cite title="Source Title">[{ transaction.TransactionDate }]</cite></footer>
					</blockquote>
				</div>
				<div class="col auto-margin-top right-text-align">
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" data-toggle="collapse" :href="[ '#account-' + transaction.AccountNumber + '-' + new Date(transaction.TransactionDate).getTime() ]" aria-expanded="false" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
					</svg>
				</div>

				<div class="collapse container" :id="[ 'account-' + transaction.AccountNumber + '-' + new Date(transaction.TransactionDate).getTime() ]">
					<div class="card card-body">
						<div class="row">
							<b>Type: </b><span> [{ transaction.TransactionTypeId }]</span>
						</div>
						<div class="row">
							<b>Merchant ID: </b><span> [{ transaction.MerchantId }]</span>
						</div>
						<div class="row">
							<b>Business Date: </b><span> [{ transaction.BusinessDate }]</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`;


function pageSelection(pageNum) {
	this.currentPage = pageNum;
	this.pageSizeSelection(this.pageSize);	
}

function pageSizeSelection(size, event = null) {
	this.pageSize = size;
	this.maxPage = Math.ceil(this.allTransactions.length / size);
	let allTransactions = [ ...this.allTransactions ];
	
	if (size === 'all') {
		Vue.set(this, 'transactions', this.allTransactions);
		
		this.$store.commit('setTransactionsListMeta', { maxPage: 1, pageNum: 1 });
	} else {
		let sliceStart = size * (this.currentPage - 1);
		let newTransactionsList = allTransactions.slice(sliceStart, sliceStart + size);;

		Vue.set(this, 'transactions', newTransactionsList);
		this.$store.commit('setTransactionsListMeta', { maxPage: this.maxPage, pageNum: this.currentPage });
	}
}

Vue.component('account-transactions', {
	delimiters: [ '[{', '}]' ],
	data: function () {
		return {
			maxPage: 1,
			currentPage: 1,
			pageSize: 'all',
			transactions: []
		}
	},
	methods: {
		pageSelection,
		pageSizeSelection
	},
	computed: {
		...Vuex.mapState({
			allTransactions: (state) => state.transactions,
			pageNums: (state) => state.transactionsPageNums
		})
	}, 
	watch: {	
		allTransactions : {
			deep: true,
			handler() {
				this.transactions = this.allTransactions;
			}
		}
	},
	mounted() { 
		this.pageSizeSelection('all');
	},
	template: AccountTransactionsTemplate
});