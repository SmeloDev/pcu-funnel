window.onload = function () {
  CanvasJS.addCultureInfo("es", {
    decimalSeparator: ".", // Observe ToolTip Number Format
    digitGroupSeparator: " ", // Observe axisY labels
  });

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
  const filterBudgetContent = document.querySelector(
    "div.filter-content.budget"
  );

  const funnelCloseBtn = document.querySelector("div#close-funnel-container");
  const funnelContainer = document.querySelector("div.funnel-box");

  const statisticCloseBtn = document.querySelector(
    "div#close-statistic-container"
  );
  const statisticContainer = document.querySelector("div.statistic-box");

  const sessionsCloseBtn = document.querySelector("div#close-sessions-btn");
  const sessionsContainer = document.querySelector("div#sessions-container");

  const startedCloseBtn = document.querySelector("div#close-started-btn");
  const startedContainer = document.querySelector(
    "div#started-configurations-container"
  );

  const completedCloseBtn = document.querySelector("div#close-completed-btn");
  const completedContainer = document.querySelector(
    "div#completed-configurations-container"
  );

  const leadsCloseBtn = document.querySelector("div#close-leads-btn");
  const leadsContainer = document.querySelector("div#digital-leads-container");

  const salesCloseBtn = document.querySelector("div#close-sales-btn");
  const salesContainer = document.querySelector("div#digital-sales-container");

  const budgetCloseBtn = document.querySelector("div#budget-sales-btn");
  const budgetContainer = document.querySelector("div#budget-sales-container");

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
  closesContainer(funnelContainer, funnelCloseBtn, "disappearance");
  closesContainer(statisticContainer, statisticCloseBtn, "disappearance");
  closesContainer(sessionsContainer, sessionsCloseBtn, "disappearance");
  closesContainer(startedContainer, startedCloseBtn, "disappearance");
  closesContainer(completedContainer, completedCloseBtn, "disappearance");
  closesContainer(leadsContainer, leadsCloseBtn, "disappearance");
  closesContainer(salesContainer, salesCloseBtn, "disappearance");
  closesContainer(budgetContainer, budgetCloseBtn, "disappearance");

  // Первый график
  const firtChartBar = new CanvasJS.Chart("first-chart-bar", {
    animationEnabled: true,
    animationDuration: 2000,

    axisX: {
      interval: 1,
      lineColor: "white",
      labelFontColor: "white",
      labelPlacement: "inside",

      tickColor: "white",
    },
    axisY2: {
      gridColor: "rgba(255,255,255,.1)",
      reversed: true,
      lineColor: "white",
      labelFontColor: "white",
      tickColor: "white",
    },
    data: [
      {
        type: "bar",
        indexLabelPlacement: "inside",
        indexLabel: "{y} UAH",
        indexLabelFontColor: "white",
        indexLabelFontWeight: "900",
        indexLabelOrientation: "horizontal",
        toolTipContent: "{y} UAH",
        axisYType: "secondary",
        color: "#1b506e",
        dataPoints: [
          { y: 3, label: " " },
          { y: 7, label: " " },
          { y: 5, label: " " },
          { y: 9, label: " " },
        ],
      },
    ],
  });

  // Второй график
  const secondChartBar = new CanvasJS.Chart("second-chart-bar", {
    animationEnabled: true,
    animationDuration: 2000,

    axisX: {
      interval: 1,
      lineColor: "white",
      labelFontColor: "white",
      labelPlacement: "inside",

      tickColor: "white",
    },
    axisY2: {
      gridColor: "rgba(255,255,255,.1)",
      lineColor: "white",
      labelFontColor: "white",
      tickColor: "white",
    },
    data: [
      {
        type: "bar",
        indexLabelPlacement: "inside",
        indexLabel: "{y} UAH",
        indexLabelFontColor: "white",
        indexLabelFontWeight: "900",
        indexLabelOrientation: "horizontal",
        toolTipContent: "{y} UAH",
        axisYType: "secondary",
        color: "#56bdea",
        dataPoints: [
          { y: 3, label: " " },
          { y: 7, label: " " },
          { y: 5, label: " " },
          { y: 9, label: " " },
        ],
      },
    ],
  });
  firtChartBar.render();
  secondChartBar.render();

  // Закоментировал воронки с CanvasJs

  // Первая воронка
  // const firstFunnel = new CanvasJS.Chart("first-funnel", {
  //   animationEnabled: true,
  //   animationDuration: 1500,
  //   culture: "es",

  //   title: {
  //     text: "",
  //   },
  //   data: [
  //     {
  //       type: "funnel",
  //       indexLabelPlacement: "inside",
  //       indexLabelFontColor: "white",
  //       indexLabelFontWeight: "900",
  //       indexLabel: "{y}",
  //       toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
  //       neckWidth: "65%",
  //       neckHeight: 0,
  //       valueRepresents: "area",
  //       dataPoints: [
  //         { y: 3871, label: "Vehicle sessions", color: "#1b506e" },
  //         { y: 2496, label: "Engaged configurations", color: "#0f3155" },
  //         { y: 1398, label: "Digital leads", color: "#1a3c60" },
  //         { y: 1118, label: "Showroom trafic", color: "#245282" },
  //         { y: 800, label: "Retail commercial offer", color: "#3171b1" },
  //         { y: 600, label: "Retail contracts", color: "#528bb8" },
  //         { y: 400, label: "Digital sales", color: "#449ac0" },
  //         { y: 200, label: "Transformation rate", color: "#56bdea" },
  //       ],
  //     },
  //   ],
  // });

  // Вторая воронка
  // const secondFunnel = new CanvasJS.Chart("second-funnel", {
  //   animationEnabled: true,
  //   animationDuration: 1000,
  //   culture: "es",
  //   title: {
  //     text: "",
  //   },
  //   data: [
  //     {
  //       type: "funnel",
  //       indexLabelPlacement: "inside",
  //       indexLabelFontColor: "white",
  //       indexLabelFontWeight: "900",
  //       indexLabel: "{y}",
  //       toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
  //       neckWidth: "65%",
  //       neckHeight: 0,
  //       valueRepresents: "area",
  //       dataPoints: [
  //         { y: 3871, label: "Vehicle sessions", color: "#1b506e" },
  //         { y: 2496, label: "Engaged configurations", color: "#0f3155" },
  //         { y: 1398, label: "Digital leads", color: "#1a3c60" },
  //         { y: 1118, label: "Showroom trafic", color: "#245282" },
  //         { y: 800, label: "Retail commercial offer", color: "#3171b1" },
  //         { y: 600, label: "Retail contracts", color: "#528bb8" },
  //         { y: 400, label: "Digital sales", color: "#449ac0" },
  //         { y: 200, label: "Transformation rate", color: "#56bdea" },
  //       ],
  //     },
  //   ],
  // });

  // calculatePercentageFirtsFunnel();
  // calculatePercentageSecondFunnel();
  // firstFunnel.render();
  // secondFunnel.render();

  // function calculatePercentageFirtsFunnel() {
  //   var dataPoint = firstFunnel.options.data[0].dataPoints;
  //   var total = dataPoint[0].y;
  //   for (var i = 0; i < dataPoint.length; i++) {
  //     if (i == 0) {
  //       firstFunnel.options.data[0].dataPoints[i].percentage = 100;
  //     } else {
  //       firstFunnel.options.data[0].dataPoints[i].percentage = (
  //         (dataPoint[i].y / total) *
  //         100
  //       ).toFixed(2);
  //     }
  //   }
  // }
  // function calculatePercentageSecondFunnel() {
  //   var dataPoint = secondFunnel.options.data[0].dataPoints;
  //   var total = dataPoint[0].y;
  //   for (var i = 0; i < dataPoint.length; i++) {
  //     if (i == 0) {
  //       secondFunnel.options.data[0].dataPoints[i].percentage = 100;
  //     } else {
  //       secondFunnel.options.data[0].dataPoints[i].percentage = (
  //         (dataPoint[i].y / total) *
  //         100
  //       ).toFixed(2);
  //     }
  //   }
  // }
};
