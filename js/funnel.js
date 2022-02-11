const filterToggleBtn = document.querySelector("div.filter-toggle-btn");
const filterContent = document.querySelector("div.filter-content");

const filterAnalyticsToggleBtn = document.querySelector(
  "div.filter-toggle-btn.analytics"
);
const filterAnalyticsContent = document.querySelector(
  "div.filter-content.analytics"
);
const filterBudgetToggleBtn = document.querySelector(
  "div.filter-toggle-btn.budget"
);
const filterBudgetContent = document.querySelector("div.filter-content.budget");
const budgetTable = document.querySelector("#budget-sales-container");

const showMoreBtn = document.querySelector(".table-section #show_more_btn");
console.log(showMoreBtn);
const digitalLeadsTables = document.querySelectorAll(
  "#digital-leads-additional"
);

function closesContainer(containerId, buttonId, className) {
  if (containerId && buttonId) {
    buttonId.addEventListener("click", () => {
      containerId.classList.toggle(className);
    });
  }
}

closesContainer(filterContent, filterToggleBtn, "collapse");
closesContainer(filterAnalyticsContent, filterAnalyticsToggleBtn, "collapse");
closesContainer(filterBudgetContent, filterBudgetToggleBtn, "collapse");
closesContainer(budgetTable, filterBudgetToggleBtn, "collapse");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    const arr = Array.from(digitalLeadsTables);

    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      element.classList.toggle("show");
    }
  });
}
// const funnelCloseBtn = document.querySelector("div#close-funnel-container");
// const funnelContainer = document.querySelector("div.funnel-box");

// const statisticCloseBtn = document.querySelector(
//   "div#close-statistic-container"
// );
// const statisticContainer = document.querySelector("div.statistic-box");

// const sessionsCloseBtn = document.querySelector("div#close-sessions-btn");
// const sessionsContainer = document.querySelector("div#sessions-container");

// const startedCloseBtn = document.querySelector("div#close-started-btn");
// const startedContainer = document.querySelector(
//   "div#started-configurations-container"
// );

// const completedCloseBtn = document.querySelector("div#close-completed-btn");
// const completedContainer = document.querySelector(
//   "div#completed-configurations-container"
// );

// const leadsCloseBtn = document.querySelector("div#close-leads-btn");
// const leadsContainer = document.querySelector("div#digital-leads-container");

// const salesCloseBtn = document.querySelector("div#close-sales-btn");
// const salesContainer = document.querySelector("div#digital-sales-container");

// const budgetCloseBtn = document.querySelector("div#budget-sales-btn");
// const budgetContainer = document.querySelector("div#budget-sales-container");

// closesContainer(funnelContainer, funnelCloseBtn, "disappearance");
// closesContainer(statisticContainer, statisticCloseBtn, "disappearance");
// closesContainer(sessionsContainer, sessionsCloseBtn, "disappearance");
// closesContainer(startedContainer, startedCloseBtn, "disappearance");
// closesContainer(completedContainer, completedCloseBtn, "disappearance");
// closesContainer(leadsContainer, leadsCloseBtn, "disappearance");
// closesContainer(salesContainer, salesCloseBtn, "disappearance");
// closesContainer(budgetContainer, budgetCloseBtn, "disappearance");
