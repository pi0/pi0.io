const perfNavTiming = window.performance.getEntriesByType("navigation")[0];
const renderPerfStats = () => {
  const measure = (end, start) => {
    const diff = end - start;
    return diff >= 0 ? Math.round(diff * 1000) / 1000 + " ms" : "-";
  };
  console.log(perfNavTiming.duration);
  const measures = {
    Protocol: perfNavTiming.nextHopProtocol,
    Transfer: perfNavTiming.transferSize + " bytes",
    Request: measure(perfNavTiming.responseEnd, perfNavTiming.requestStart),
    Duration: measure(perfNavTiming.duration, 0),
  };
  document.querySelector("#perf-stats").innerHTML = Object.entries(measures)
    .map(([name, value]) => `<div>${name}: <strong>${value}</strong></div>`)
    .join("");
};
renderPerfStats();
const int = setInterval(() => {
  if (perfNavTiming.loadEventEnd) {
    clearInterval(int);
    renderPerfStats();
  }
});
