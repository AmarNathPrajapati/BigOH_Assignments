// export default class Pagination {
//     constructor(totalPages) {
//         this.totalPages = totalPages;
//         this.currentPage = 1;
//     }

//     setCurrentPage(page) {
//         this.currentPage = page;
//     }

//     nextPage() {
//         if (this.currentPage < this.totalPages) {
//             this.currentPage++;
//         }
//         return this.currentPage;
//     }

//     prevPage() {
//         if (this.currentPage > 1) {
//             this.currentPage--;
//         }
//         return this.currentPage;
//     }

//     getPages() {
//         let pages = [];
//         if (this.totalPages <= 7) {
//             pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
//         } else {
//             if (this.currentPage <= 3) {
//                 pages = [1, 2, 3, "...", this.totalPages - 1, this.totalPages];
//             } else if (this.currentPage >= this.totalPages - 2) {
//                 pages = [1, 2, "...", this.totalPages - 2, this.totalPages - 1, this.totalPages];
//             } else {
//                 pages = [1, "...", this.currentPage - 1, this.currentPage, this.currentPage + 1, "...", this.totalPages];
//             }
//         }
//         return pages;
//     }
// }

export default class Pagination {
    constructor(totalPages) {
        this.totalPages = totalPages;
        this.currentPage = 1;
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
        console.log("Next Page Selected:", this.currentPage);
        return this.currentPage;
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
        console.log("Previous Page Selected:", this.currentPage);
        return this.currentPage;
    }

    setPage(page) {
        this.currentPage = page;
    }

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
