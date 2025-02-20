class Pagination {
    constructor(totalPages) {
        this.totalPages = totalPages;
        this.currentPage = 1;
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
        return this.currentPage;
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        return this.currentPage;
    }

    getPages() {
        let pages = [1, 2, 3,];
        // if current page ahead of more than three pages
        if (this.currentPage > 3) {
            pages.push('...');
            for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
                if (i > 3 && i < this.totalPages) pages.push(i);
            }
        }
        //if more than 3 pages are ahead than current page
        if (this.currentPage < this.totalPages - 3) {
            pages.push('...');
        }
        //adding last two pages
        pages.push(this.totalPages - 1, this.totalPages);
        return pages;
    }
}
