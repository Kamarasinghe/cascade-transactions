const NavBarTemplate = `<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
	<div class="row full-width justify-content-end">
		<div class="col col-xl-2 acc-num">
			Account #: <b>[{ accountInfo.accountNum }]</b>
		</div>
		<div class="col col-xl-2 dstarting-balance">
			Starting: <b>$[{ accountInfo.startingBalance }]</b>
		</div>
		<div class="col col-xl-2 pending-balance">
			Pending: <b>$[{ accountInfo.pendingBalance }]</b>
		</div>
		<div class="col col-xl-2 ending-balance">
			Ending: <b>$[{ accountInfo.endingBalance }]</b>
		</div>
	</div>
</nav>`;


Vue.component('navbar', {
	delimiters: [ '[{', '}]' ],
	methods: {
		...Vuex.mapActions([
			'fetchAccountTransactions'
		])
	},
	computed: {
		...Vuex.mapState({
			accountInfo: (state) => state.accountInfo
		})
	},
	created () {
		this.fetchAccountTransactions();
	},
	template: NavBarTemplate
});