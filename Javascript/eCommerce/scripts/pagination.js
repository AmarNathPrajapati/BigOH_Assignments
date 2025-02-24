export default class Pagination {
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

    setPage(page) {
        this.currentPage = page;
    }
    // setTotalPages(newTotalPages) {
    //     this.totalPages = newTotalPages;
    //     this.currentPage = 1;  // Reset to first page when page size changes
    // }
    

    getPages() {
        console.log("Current Page:", this.currentPage, "Total Pages:", this.totalPages);
        let pages = [1]; //  First page hamesha dikhana hai

        if (this.totalPages <= 7) {
            for (let i = 2; i <= this.totalPages; i++) {
                pages.push(i);
            }
        } else {
            let left = Math.max(2, this.currentPage - 2);
            let right = Math.min(this.totalPages - 1, this.currentPage + 2);

            console.log("Left Bound:", left, "Right Bound:", right);

            if (left > 2) {
                pages.push("...");
                console.log("Adding '...' at Left");
            }

            for (let i = left; i <= right; i++) {
                pages.push(i);
            }

            if (right < this.totalPages - 1) {
                pages.push("...");
                console.log("Adding '...' at Right");
            }

            pages.push(this.totalPages);
        }

        console.log("Pages Generated:", pages);
        return pages;
    }
}
