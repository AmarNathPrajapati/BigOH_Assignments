export default class Pagination {
    private totalPages: number;
    private currentPage: number;
  
    constructor(totalPages: number) {
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
  
    setPage(page: number) {
      this.currentPage = page;
    }
  
    getPages() {
      let pages: (number | string)[] = [1];
  
      if (this.totalPages <= 7) {
        for (let i = 2; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        let left = Math.max(2, this.currentPage - 2);
        let right = Math.min(this.totalPages - 1, this.currentPage + 2);
  
        if (left > 2) pages.push("...");
        for (let i = left; i <= right; i++) {
          pages.push(i);
        }
        if (right < this.totalPages - 1) pages.push("...");
        pages.push(this.totalPages);
      }
      return pages;
    }
  }
  