$(document).ready(function () {
  var table = $("#selling_container").DataTable({
    initComplete: function () {
      this.api()
        .columns(1)
        .every(function () {
          var column = this;
          var containerForSelect = $("#selling_table_dealer");

          var select = $('<select><option value=""></option></select>')
            .appendTo(containerForSelect)
            .on("change", function () {
              var val = $.fn.dataTable.util.escapeRegex($(this).val());

              column.search(val ? "^" + val + "$" : "", true, false).draw();
            });

          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.append('<option value="' + d + '">' + d + "</option>");
            });
        });
    },
    scrollX: true,
    paging: false,
    info: false,

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

    //----------------------------------
    const inpt = document.querySelector(
      `input.selling[data-column="${e.currentTarget.dataset.column}"]`
    );
    inpt.checked = table.column(atr).visible();
  });
});

$(document).ready(function () {
  var table = $("#service_container").DataTable({
    initComplete: function () {
      this.api()
        .columns(1)
        .every(function () {
          var column = this;
          var containerForSelect = $("#service_table_dealer");

          var select = $('<select><option value=""></option></select>')
            .appendTo(containerForSelect)
            .on("change", function () {
              var val = $.fn.dataTable.util.escapeRegex($(this).val());

              column.search(val ? "^" + val + "$" : "", true, false).draw();
            });

          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.append('<option value="' + d + '">' + d + "</option>");
            });
        });
    },
    scrollX: true,
    paging: false,
    info: false,

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

  $(".toggle-vis.service").on("click", function (e) {
    // e.preventDefault();

    const atr = $(this).attr("data-column").split(",");

    const columns = table.columns(atr);
    columns.visible(!table.column(atr).visible());

    //----------------------------------
    const inpt = document.querySelector(
      `input.service[data-column="${e.currentTarget.dataset.column}"]`
    );
    inpt.checked = table.column(atr).visible();
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
      if (button.textContent === "-") {
        button.textContent = "+";
      } else {
        button.textContent = "-";
      }
    });
  }
}

closesContainer(qualitySectionContent, qualityExpandBtn, "collapse");
closesContainer(sellingTableContent, sellingTableBtn, "collapse");
closesContainer(serviceTableContent, serviceTableBtn, "collapse");

//------------------------------------

const sellingFilterBtn = document.querySelector(
  ".selling-table .filter_column_btn"
);
const sellingFilterWrapper = document.querySelector(
  ".selling-table .modal_wrapper"
);
const sellingFilterCloseBtn = document.querySelector(
  ".selling-table .modal_wrapper .close_btn"
);

const sellingFilterSaveBtn = document.querySelector(
  ".selling-table .modal_wrapper .save_btn"
);

if (sellingFilterBtn) {
  sellingFilterBtn.addEventListener("click", () => {
    sellingFilterWrapper.classList.add("visible");
  });
}

if (sellingFilterWrapper) {
  sellingFilterWrapper.addEventListener("click", (e) => {
    if (
      e.target === sellingFilterWrapper ||
      e.target === sellingFilterSaveBtn
    ) {
      sellingFilterWrapper.classList.remove("visible");
    }
  });
}

if (sellingFilterCloseBtn) {
  sellingFilterCloseBtn.addEventListener("click", () => {
    sellingFilterWrapper.classList.remove("visible");
  });
}

//------------------------------------

const serviceFilterBtn = document.querySelector(
  ".service-table .filter_column_btn"
);
const serviceFilterWrapper = document.querySelector(
  ".service-table .modal_wrapper"
);
const serviceFilterCloseBtn = document.querySelector(
  ".service-table .modal_wrapper .close_btn"
);

const serviceFilterSaveBtn = document.querySelector(
  ".service-table .modal_wrapper .save_btn"
);

if (serviceFilterBtn) {
  serviceFilterBtn.addEventListener("click", () => {
    serviceFilterWrapper.classList.add("visible");
  });
}

if (serviceFilterWrapper) {
  serviceFilterWrapper.addEventListener("click", (e) => {
    if (
      e.target === serviceFilterWrapper ||
      e.target === serviceFilterSaveBtn
    ) {
      serviceFilterWrapper.classList.remove("visible");
    }
  });
}

if (serviceFilterCloseBtn) {
  serviceFilterCloseBtn.addEventListener("click", () => {
    serviceFilterWrapper.classList.remove("visible");
  });
}
