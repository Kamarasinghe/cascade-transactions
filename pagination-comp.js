const PaginationCompTemplate = `<ul class="pagination mb-3" v-bind:class="{ 'd-none': !(lastPage > 1) }">
	<li class="page-item">
		<a class="page-link pagination-btn" aria-label="First" @click="pageSelection(1)">
			<span aria-hidden="true">&laquo;</span>
		</a>
	</li>
	
	<li class="page-item" v-bind:class="{ active: page.isActive }" v-for="page in pageNums">
		<a class="page-link pagination-btn" @click="pageSelection(page.num)">{{ page.num }}</a>
	</li>

	<li class="page-item">
		<a class="page-link pagination-btn" aria-label="Last" @click="pageSelection(lastPage)">
			<span aria-hidden="true">&raquo;</span>
		</a>
	</li>
</ul>`;


Vue.component('pagination-comp', {
	props: [ 'lastPage', 'pageNums', 'pageSelection' ],
	template: PaginationCompTemplate
});