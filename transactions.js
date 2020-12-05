const AccountTransactionsTemplate = `<div class="container">
	<div class="card">
		<div class="row no-gutters">
			<div class="card-header full-width">
				<div class="row">
					<div class="col-md-10 col-9">
						Good Buy
					</div>
					<div class="col right-text-align">
						$21.40
					</div>
				</div>
			</div>
		</div>
		<div class="card-body">
			<div class="row">
				<div class="col-7 col-sm-8 col-md-9 col-lg-10">
					<blockquote class="blockquote mb-0">
						<p>This is the description of the transaction</p>
						<footer class="blockquote-footer"><cite title="Source Title">2020-08-28T03:50:01</cite></footer>
					</blockquote>
				</div>
				<div class="col auto-margin-top right-text-align">
					<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down pointer-cursor" fill="currentColor" data-toggle="collapse" href="#collapseExample" aria-expanded="false" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
					</svg>
				</div>

				<div class="collapse container" id="collapseExample">
					<div class="card card-body">
						<div class="row">
							<b>Type: </b><span>Debit</span>
						</div>
						<div class="row">
							<b>Merchant ID: </b><span>WWV-000-1220</span>
						</div>
						<div class="row">
							<b>Business Date: </b><span>2020-08-28T03:50:01</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`;


Vue.component('account-transactions', {
	template: AccountTransactionsTemplate
});