$(document).ready(function () {
  var table = $("#new_car_container").DataTable({
    initComplete: function () {
      this.api()
        .columns(1)
        .every(function () {
          var column = this;
          var containerForSelect = $("#new_car_table_dealer");

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

  const inptsFocusArr = Array.from(
    document.querySelectorAll(
      `.checkbox-container input.toggle-vis.new_car.focus`
    )
  );
  const inptsArr = Array.from(
    document.querySelectorAll(`.checkbox-container input.toggle-vis.new_car`)
  );
  const startCheckboxes = [
    "recommendation_checkbox",
    "new_car_checkbox",
    "politeness_checkbox",
  ];

  // Відображення колонок по кліку на чекбокс
  $(".toggle-vis.new_car").on("click", function (e) {
    const attributesArray = $(this).attr("data-column").split(",");
    const columns = table.columns(attributesArray);
    const inpt = document.querySelector(
      `input.new_car[data-column="${e.currentTarget.dataset.column}"]`
    );

    columns.visible(!table.column(attributesArray).visible());
    inpt.checked = table.column(attributesArray).visible();

    if (this.id === "all_focus_checkbox") {
      if (this.checked) {
        inptsFocusArr.map((i) => (i.checked = true));
      } else {
        inptsFocusArr.map((i) => (i.checked = false));
      }
    }
    if (this.id === "focus_checkbox") {
      if (this.checked) {
        startCheckboxes.map((i) => {
          const input = document.getElementById(`${i}`);
          input.checked = true;
        });
      } else {
        inptsFocusArr.map((i) => (i.checked = false));
      }
    }
  });

  // Закриття колонок по кліку на заголовок колонок
  $(".close-vis.new_car").on("click", function (e) {
    const attributesArray = $(this).attr("data-column").split(",");
    const columns = table.columns(attributesArray);
    const inpt = document.querySelector(
      `input.new_car[data-column="${e.currentTarget.dataset.column}"]`
    );

    columns.visible(false);
    inpt.checked = false;
    inptsFocusArr.map((i) => (i.checked = false));
  });

  // Перша загрузка колонок і їх відображення в залежності від того checked input або ні
  inptsArr.map((i) => {
    table.columns([i.dataset.column]).visible(i.checked);
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

  const inptsFocusArr = Array.from(
    document.querySelectorAll(
      `.checkbox-container input.toggle-vis.service.focus`
    )
  );
  const inptsArr = Array.from(
    document.querySelectorAll(`.checkbox-container input.toggle-vis.service`)
  );
  const startCheckboxes = [
    "recommendation_checkbox_service",
    "new_car_checkbox_service",
    "politeness_checkbox_service",
  ];

  // Відображення колонок по кліку на чекбокс
  $(".toggle-vis.service").on("click", function (e) {
    const attributesArray = $(this).attr("data-column").split(",");
    const columns = table.columns(attributesArray);
    const inpt = document.querySelector(
      `input.service[data-column="${e.currentTarget.dataset.column}"]`
    );

    columns.visible(!table.column(attributesArray).visible());
    inpt.checked = table.column(attributesArray).visible();

    if (this.id === "all_focus_checkbox_service") {
      if (this.checked) {
        inptsFocusArr.map((i) => (i.checked = true));
      } else {
        inptsFocusArr.map((i) => (i.checked = false));
      }
    }
    if (this.id === "focus_checkbox_service") {
      if (this.checked) {
        startCheckboxes.map((i) => {
          const input = document.getElementById(`${i}`);
          input.checked = true;
        });
      } else {
        inptsFocusArr.map((i) => (i.checked = false));
      }
    }
  });

  // Закриття колонок по кліку на заголовок колонок
  $(".close-vis.service").on("click", function (e) {
    const attributesArray = $(this).attr("data-column").split(",");
    const columns = table.columns(attributesArray);
    const inpt = document.querySelector(
      `input.service[data-column="${e.currentTarget.dataset.column}"]`
    );

    columns.visible(false);
    inpt.checked = false;
    inptsFocusArr.map((i) => (i.checked = false));
  });

  // Перша загрузка колонок і їх відображення в залежності від того checked input або ні
  inptsArr.map((i) => {
    table.columns([i.dataset.column]).visible(i.checked);
  });
});

const qualityExpandBtn = document.querySelector(
  "section.quality-section .expand_section-btn"
);
const qualitySectionContent = document.querySelector(
  "section.quality-section .section-content"
);

const new_carTableBtn = document.querySelector(
  ".new_car-table .new_car_table-btn"
);
const new_carTableContent = document.querySelector(
  ".new_car-table .table-content"
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
closesContainer(new_carTableContent, new_carTableBtn, "collapse");
closesContainer(serviceTableContent, serviceTableBtn, "collapse");

//------------------------------------

const new_carFilterBtn = document.querySelector(
  ".new_car-table .filter_column_btn"
);
const new_carFilterWrapper = document.querySelector(
  ".new_car-table .modal_wrapper"
);
const new_carFilterCloseBtn = document.querySelector(
  ".new_car-table .modal_wrapper .close_btn"
);

const new_carFilterSaveBtn = document.querySelectorAll(
  ".new_car-table .modal_wrapper .save_btn"
);

if (new_carFilterBtn) {
  new_carFilterBtn.addEventListener("click", () => {
    new_carFilterWrapper.classList.add("visible");
  });
}

if (new_carFilterWrapper) {
  new_carFilterWrapper.addEventListener("click", (e) => {
    if (
      e.target === new_carFilterWrapper ||
      e.target === new_carFilterSaveBtn[0] ||
      e.target === new_carFilterSaveBtn[1]
    ) {
      new_carFilterWrapper.classList.remove("visible");
    }
  });
}

if (new_carFilterCloseBtn) {
  new_carFilterCloseBtn.addEventListener("click", () => {
    new_carFilterWrapper.classList.remove("visible");
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

const serviceFilterSaveBtn = document.querySelectorAll(
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
      e.target === serviceFilterSaveBtn[0] ||
      e.target === serviceFilterSaveBtn[1]
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
