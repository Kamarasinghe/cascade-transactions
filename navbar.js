const NavBarTemplate = `<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
	<div class="row full-width justify-content-end">
		<div class="acc-num col-xl-2 col-lg-3 col-md-4 col-sm-5 col-7">
			Account #: 123456789
		</div>
		<div class="acc-balance">
			<div class="row">
				Balance: $455.93
			</div>
			<div class="row">
				Pending: $34.20
			</div>
		</div>
	</div>
</nav>`;

Vue.component('navbar', {
    delimiters: [ '[{', '}]' ],
	template: NavBarTemplate
});