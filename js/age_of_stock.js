const data_1 = [
  {
    model: "C4",
    comendo: "1CLEF1234",
    equipment: "NEW C4 PT 100 MT6 LIVE",
    all_years_stock_2: "",
    all_years_stock_3: "",
    all_years_stock_4t: "9",
    all_years_stock_4c: "",
    all_years_stock_5: "",
    all_years_stock_6: "9",
    all_years_stock_total: "18",
    stock_prev_years_2: "1",
    stock_prev_years_3: "",
    stock_prev_years_4tr: "",
    stock_prev_years_4c: "8",
    stock_prev_years_5: "3",
    stock_prev_years_6: "",
    stock_prev_years_total: "13",
    sales_6: "1",
    sales_5: "",
    sales_4: "",
    sales_3: "1",
    sales_2: "",
    sales_1: "",
    sales_0: "",
    contracts: "",
    age_of_stock_90_120: "",
    age_of_stock_120_180: "23",
    age_of_stock_180plus: "",
  },
  {
    model: "C4",
    comendo: "1CLEF1234",
    equipment: "NEW C4 PT 155 EAT Feel",
    all_years_stock_2: "4",
    all_years_stock_3: "9",
    all_years_stock_4t: "",
    all_years_stock_4c: "",
    all_years_stock_5: "",
    all_years_stock_6: "2",
    all_years_stock_total: "15",
    stock_prev_years_2: "",
    stock_prev_years_3: "4",
    stock_prev_years_4tr: "4",
    stock_prev_years_4c: "",
    stock_prev_years_5: "",
    stock_prev_years_6: "",
    stock_prev_years_total: "11",
    sales_6: "",
    sales_5: "1",
    sales_4: "",
    sales_3: "1",
    sales_2: "1",
    sales_1: "1",
    sales_0: "",
    contracts: "",
    age_of_stock_90_120: "23",
    age_of_stock_120_180: "23",
    age_of_stock_180plus: "",
  },
  {
    model: "C4",
    comendo: "1CLEF1234",
    equipment: "NEW C4 1.2 PT 130 ATB Feel",
    all_years_stock_2: "7",
    all_years_stock_3: "",
    all_years_stock_4t: "",
    all_years_stock_4c: "9",
    all_years_stock_5: "",
    all_years_stock_6: "1",
    all_years_stock_total: "17",
    stock_prev_years_2: "5",
    stock_prev_years_3: "",
    stock_prev_years_4tr: "",
    stock_prev_years_4c: "",
    stock_prev_years_5: "",
    stock_prev_years_6: "3",
    stock_prev_years_total: "8",
    sales_6: "1",
    sales_5: "",
    sales_4: "",
    sales_3: "1",
    sales_2: "",
    sales_1: "",
    sales_0: "",
    contracts: "",
    age_of_stock_90_120: "23",
    age_of_stock_120_180: "23",
    age_of_stock_180plus: "",
  },
];

const data_2 = [
  {
    model: "2008",
    jan: "0",
    feb: "34",
    mar: "23",
    apr: "12",
    may: "45",
    june: "4",
    jul: "45",
    aug: "12",
    sept: "45",
    oct: "4",
    nov: "45",
    dec: "3",
    total: "234",
    percent: "9.7%",
  },
  {
    model: "308",
    jan: "0",
    feb: "34",
    mar: "23",
    apr: "12",
    may: "45",
    june: "4",
    jul: "45",
    aug: "12",
    sept: "45",
    oct: "4",
    nov: "45",
    dec: "3",
    total: "234",
    percent: "1.7%",
  },
];

$(document).ready(function () {
  const table = $("#age_of_stock").DataTable({
    data: data_1,
    columns: [
      { data: "model" },
      { data: "comendo" },
      { data: "equipment" },
      { data: "all_years_stock_2" },
      { data: "all_years_stock_3" },
      { data: "all_years_stock_4t" },
      { data: "all_years_stock_4c" },
      { data: "all_years_stock_5" },
      { data: "all_years_stock_6" },
      { data: "all_years_stock_total" },
      { data: "stock_prev_years_2" },
      { data: "stock_prev_years_3" },
      { data: "stock_prev_years_4tr" },
      { data: "stock_prev_years_4c" },
      { data: "stock_prev_years_5" },
      { data: "stock_prev_years_6" },
      { data: "stock_prev_years_total" },
      { data: "sales_6" },
      { data: "sales_5" },
      { data: "sales_4" },
      { data: "sales_3" },
      { data: "sales_2" },
      { data: "sales_1" },
      { data: "sales_0" },
      { data: "contracts" },
      { data: "age_of_stock_90_120" },
      { data: "age_of_stock_120_180" },
      { data: "age_of_stock_180plus" },
    ],
    columnDefs: [{ className: "accent_column", targets: [9, 16] }],
    scrollX: true,
    paging: false,
    info: false,
  });
});

$(document).ready(function () {
  const table = $("#mix_version_1").DataTable({
    data: data_2,
    columns: [
      { data: "model" },
      { data: "feb" },
      { data: "jan" },
      { data: "mar" },
      { data: "apr" },
      { data: "may" },
      { data: "june" },
      { data: "jul" },
      { data: "aug" },
      { data: "sept" },
      { data: "oct" },
      { data: "nov" },
      { data: "dec" },
      { data: "total" },
      { data: "percent" },
    ],
    // columnDefs: [{ className: "accent_column", targets: [9, 16] }],
    scrollX: true,
    paging: false,
    info: false,
  });
});

const qualityExpandBtn = document.querySelector("section.quality-section .expand_section-btn");
const qualitySectionContent = document.querySelector("section.quality-section .section-content");

const new_carTableBtn = document.querySelector(".age_of_stock-table .age_of_stock_table-btn");
const new_carTableContent = document.querySelector(".age_of_stock-table .table-content");

const serviceTableBtn = document.querySelector(".service-table .service_table-btn");
const serviceTableContent = document.querySelector(".service-table .table-content");

function closesContainer(container, button, className) {
  if (container && button) {
    button.addEventListener("click", () => {
      container.classList.toggle(className);
      if (button.textContent === "-") {
        button.textContent = "+";
      } else {
        button.textContent = "-";
      }
    });
  }
}

closesContainer(qualitySectionContent, qualityExpandBtn, "collapse");
closesContainer(new_carTableContent, new_carTableBtn, "collapse");
closesContainer(serviceTableContent, serviceTableBtn, "collapse");

// ---------------------------------------------------

const ctx_1 = document.getElementById("myChart_1");
const ctx_2 = document.getElementById("myChart_2");
const ctx_3 = document.getElementById("myChart_3");
const ctx_4 = document.getElementById("myChart_4");
const ctx_5 = document.getElementById("myChart_5");

const chartData_1 = [
  { model: "208", count_1: 10, count_2: 15 },
  { model: "301", count_1: 20, count_2: 23 },
  { model: "308 NEW", count_1: 15, count_2: 20 },
  { model: "308 SW NEW", count_1: 25, count_2: 34 },
  { model: "408 NEW", count_1: 22, count_2: 24 },
  { model: "508", count_1: 30, count_2: 35 },
  { model: "2008", count_1: 28, count_2: 31 },
  { model: "E-2008", count_1: 0, count_2: 0 },
  { model: "3008", count_1: 0, count_2: 0 },
  { model: "3008 PHEV", count_1: 0, count_2: 0 },
  { model: "5008", count_1: 0, count_2: 0 },
  { model: "LANDTREK", count_1: 0, count_2: 0 },
  { model: "RIFTER", count_1: 0, count_2: 0 },
  { model: "E-RIFTER", count_1: 28, count_2: 42 },
  { model: "PARTNER", count_1: 28, count_2: 34 },
  { model: "TRAVELLER", count_1: 28, count_2: 39 },
  { model: "EXPERT", count_1: 28, count_2: 35 },
  { model: "BOXER", count_1: 28, count_2: 37 },
];

new Chart(ctx_1, {
  type: "bar",
  data: {
    labels: chartData_1.map((row) => row.model),

    datasets: [
      {
        label: "Dataset 1",
        data: chartData_1.map((row) => row.count_1),
        borderWidth: 1,
        backgroundColor: "#223464",
        stack: "Stack 0",
      },
      {
        label: "Dataset 2",
        data: chartData_1.map((row) => row.count_2),
        borderWidth: 1,
        backgroundColor: "#48A0DB",
        stack: "Stack 0",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx_2, {
  type: "bar",
  data: {
    labels: chartData_1.map((row) => row.model),

    datasets: [
      {
        label: "Dataset 1",
        data: chartData_1.map((row) => row.count_1),
        borderWidth: 1,
        backgroundColor: "#223464",
        stack: "Stack 0",
      },
      {
        label: "Dataset 2",
        data: chartData_1.map((row) => row.count_2),
        borderWidth: 1,
        backgroundColor: "#48A0DB",
        stack: "Stack 0",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(ctx_3, {
  type: "doughnut",
  data: {
    labels: ["Diesel", "Petrol", "Hybrid", "Electro"],
    datasets: [
      {
        label: "Mix Engine",
        data: [300, 50, 100, 40],
        backgroundColor: ["#223464", "#59C076", "#657DEB", "#FB896B"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
});

new Chart(ctx_4, {
  type: "doughnut",
  data: {
    labels: ["Diesel", "Petrol"],
    datasets: [
      {
        label: "Mix VP/VU",
        data: [300, 50],
        backgroundColor: ["#223464", "#FB896B"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        position: "right",
      },
    },
  },
});
