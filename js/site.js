/* VATES — tiny vanilla JS: renders the issue cards from js/issues-data.js
   and points the "latest issue" buttons at the newest available PDF.
   No cookies, no analytics, no third-party requests. */
(function () {
  var issues = (window.VATES_ISSUES || []).slice().sort(function (a, b) { return b.n - a.n; });
  var DIR = "issues/";
  function roman(n) {
    var map = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]], s = "";
    map.forEach(function (p) { while (n >= p[0]) { s += p[1]; n -= p[0]; } });
    return s;
  }
  function esc(t) { var d = document.createElement("div"); d.textContent = t; return d.innerHTML; }
  var available = issues.filter(function (i) { return i.pdf; });
  var latest = available[0];

  // "Read the latest issue" buttons
  if (latest) {
    document.querySelectorAll("[data-latest-link]").forEach(function (a) { a.href = DIR + latest.pdf; });
    document.querySelectorAll("[data-latest-label]").forEach(function (el) {
      el.textContent = "Issue " + latest.n + " \u00b7 " + latest.when;
    });
  }

  // Issue cards
  var grid = document.getElementById("issue-grid");
  if (grid) {
    grid.innerHTML = issues.map(function (i) {
      var title = "Issue " + i.n;
      var ph = !i.pdf;
      var isLatest = latest && i.n === latest.n;
      var meta = [];
      if (i.ed) meta.push("Edited by " + i.ed);
      if (i.pages) meta.push(i.pages + " pages");
      var body = ph
        ? '<span class="badge" style="background:#7a2218">Placeholder</span>' +
          '<h3>' + title + '</h3><p class="when">' + esc(i.when) + '</p>' +
          '<p>PDF to be added: save it as <code>issues/vates-issue-' + (i.n < 10 ? "0" : "") + i.n + '.pdf</code> and edit this issue\u2019s line in <code>js/issues-data.js</code>.</p>'
        : (isLatest ? '<span class="badge">Latest</span>' : '') +
          '<h3>' + title + '</h3><p class="when">' + esc(i.when) + (i.note ? " \u2014 " + esc(i.note) : "") + '</p>' +
          '<p class="by">' + esc(meta.join(" \u00b7 ")) + '</p>' +
          '<a class="btn" href="' + DIR + esc(i.pdf) + '" aria-label="Download ' + title + ' (' + esc(i.when) + ') as PDF">Read PDF</a>';
      return '<li class="issue' + (isLatest ? " latest" : "") + (ph ? " is-placeholder" : "") + '">' +
        '<div class="plate" aria-hidden="true"><span class="w">VATES</span><span class="num">' + roman(i.n) + '</span><span class="arabic">' + esc(i.when) + '</span></div>' +
        '<div class="meta">' + body + '</div></li>';
    }).join("");
    var count = document.querySelectorAll("[data-issue-count]");
    count.forEach(function (el) { el.textContent = available.length; });
  }
})();
