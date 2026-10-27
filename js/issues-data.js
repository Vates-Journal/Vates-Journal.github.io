/* ==========================================================================
   VATES — issue list.  ONE LINE PER ISSUE.  This is the only file you need
   to edit to add an issue (after dropping the PDF into /issues/).

   Format:  { n: <issue number>, when: "<season/date>", pages: <page count>, ed: <editor>, pdf: "vates-issue-NN.pdf" },
   Naming:  issues/vates-issue-NN.pdf   (two digits: 01 … 15, 16 …)
   Newest first isn't required — the page sorts by number.
   An entry with  pdf: null  shows as a clearly marked "PDF to be added" card.
   ========================================================================== */
(function () {
  var MW = "Mark Walker", DM = "Dr David Money";
  window.VATES_ISSUES = [
    // ↓↓↓ PLACEHOLDER — replace this one line with the real details when the next issue is ready (set pdf to its file name) ↓↓↓
    { n: 16, when: "Coming very soon", pages: null, ed: null, pdf: null },
    { n: 15, when: "August 2025",           pages: 148,  ed: DM, pdf: "vates-issue-15.pdf", note: "New series, first issue" },
    { n: 14, when: "Summer 2018",           pages: 59,   ed: MW, pdf: "vates-issue-14.pdf" },
    { n: 13, when: "Autumn 2017",           pages: 40,   ed: MW, pdf: "vates-issue-13.pdf" },
    { n: 12, when: "Autumn 2016",           pages: 51,   ed: MW, pdf: "vates-issue-12.pdf" },
    { n: 11, when: "Spring 2015",           pages: 48,   ed: MW, pdf: "vates-issue-11.pdf" },
    { n: 10, when: "Autumn 2014",           pages: 58,   ed: MW, pdf: "vates-issue-10.pdf" },
    { n: 9,  when: "Spring 2014",           pages: 45,   ed: MW, pdf: "vates-issue-09.pdf" },
    { n: 8,  when: "Summer/Autumn 2013",    pages: 47,   ed: MW, pdf: "vates-issue-08.pdf" },
    { n: 7,  when: "Spring 2013",           pages: 55,   ed: MW, pdf: "vates-issue-07.pdf" },
    { n: 6,  when: "Winter 2012",           pages: 71,   ed: MW, pdf: "vates-issue-06.pdf" },
    { n: 5,  when: "Summer 2012",           pages: 65,   ed: MW, pdf: "vates-issue-05.pdf" },
    { n: 4,  when: "Autumn/Winter 2011\u201312", pages: 51, ed: MW, pdf: "vates-issue-04.pdf" },
    { n: 3,  when: "Spring 2011",           pages: 49,   ed: MW, pdf: "vates-issue-03.pdf" },
    { n: 2,  when: "Autumn 2010",           pages: 52,   ed: MW, pdf: "vates-issue-02.pdf" },
    { n: 1,  when: "Summer 2010",           pages: 47,   ed: MW, pdf: "vates-issue-01.pdf" }
  ];
})();
