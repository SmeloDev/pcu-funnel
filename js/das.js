$(document).ready(function () {
  var table = $("#selling_container").DataTable({
    // scrollY: "200px",
    scrollX: true,
    paging: true,
    language: {
      lengthMenu: "Показати _MENU_ рядків",
      search: "Пошук:",
      zeroRecords: "Nothing found - sorry",
      info: "Показані _PAGE_ з _PAGES_ записів",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
      paginate: {
        first: "First",
        last: "Last",
        next: "Наступна",
        previous: "Попередня",
      },
    },
  });

  $(".toggle-vis.selling").on("click", function (e) {
    // e.preventDefault();

    const atr = $(this).attr("data-column").split(",");

    const columns = table.columns(atr);
    columns.visible(!table.column(atr).visible());
  });
});

$(document).ready(function () {
  var table = $("#service_container").DataTable({
    // scrollY: "200px",
    paging: true,
    language: {
      lengthMenu: "Показати _MENU_ рядків",
      search: "Пошук:",
      zeroRecords: "Nothing found - sorry",
      info: "Показані _PAGE_ з _PAGES_ записів",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
      paginate: {
        first: "First",
        last: "Last",
        next: "Наступна",
        previous: "Попередня",
      },
    },
  });

  $("a.toggle-vis.service").on("click", function (e) {
    e.preventDefault();

    // Get the column API object
    var column = table.column($(this).attr("data-column"));

    // Toggle the visibility
    column.visible(!column.visible());
  });
});

const qualityExpandBtn = document.querySelector(
  "section.quality-section .expand_section-btn"
);
const qualitySectionContent = document.querySelector(
  "section.quality-section .section-content"
);

const sellingTableBtn = document.querySelector(
  ".selling-table .selling_table-btn"
);
const sellingTableContent = document.querySelector(
  ".selling-table .table-content"
);

const serviceTableBtn = document.querySelector(
  ".service-table .service_table-btn"
);
const serviceTableContent = document.querySelector(
  ".service-table .table-content"
);

function closesContainer(container, button, className) {
  if (container && button) {
    button.addEventListener("click", () => {
      container.classList.toggle(className);
    });
  }
}

closesContainer(qualitySectionContent, qualityExpandBtn, "collapse");
closesContainer(sellingTableContent, sellingTableBtn, "collapse");
closesContainer(serviceTableContent, serviceTableBtn, "collapse");
