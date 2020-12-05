// Helper Funcs
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

const newPageNums = (maxPage, currentPage) => {
	let pageNums = range(currentPage - 2, currentPage + 2, 1);

	if (maxPage <= 5) {
		pageNums = range(1, maxPage, 1);
	} else if (pageNums[0] < 1 && maxPage > 5) {
		pageNums = range(1, 5, 1);
	} else if (pageNums[pageNums.length -1] > maxPage && pageNums[0] > 1) {
		pageNums = range(maxPage - 4, maxPage, 1);
	}

	return pageNums.map((n) => { return { num: n, isActive: n === currentPage }});
}


const App = new Vue({
    el: '#app',
    store
});