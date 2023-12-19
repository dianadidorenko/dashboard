$(document).ready(function () {
  var jsonArray = [
    {
      customerName: "Jane Cooper1",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper2",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper3",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper4",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper5",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper6",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper7",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },

    {
      customerName: "Jane Cooper8",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper9",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper10",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper11",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper12",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper13",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper14",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
    {
      customerName: "Floyd Miles",
      company: "Yahoo",
      phoneNumber: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "<p class='inactive'>Inactive</p>",
    },
    {
      customerName: "Jane Cooper15",
      company: "Microsoft",
      phoneNumber: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "<p class='active'>Active</p>",
    },
  ];

  var page_number = 1;
  var records_per_page = 8;
  var total_page = Math.ceil(jsonArray.length / records_per_page);

  $.fn.displayPaginationButtons = function () {
    var buttons_text =
      '<a href="#"  onClick="javascript:$.fn.prevPage();"><img src="./images/pag-left.svg" alt="Arrow Left" /></a>';
    for (var i = 1; i <= total_page; i++) {
      var active = "";
      if (i == 1) {
        active = " active";
      } else {
        active = "";
      }
      buttons_text =
        buttons_text +
        '<a href="#" id="page_index' +
        i +
        '"  onClick="javascript:$.fn.changePageIndex(' +
        i +
        '); " class="page_index' +
        active +
        '">' +
        i +
        "</a>";
    }
    buttons_text =
      buttons_text +
      '<a href="#" onClick="javascript:$.fn.nextPage();"><img src="./images/pag-right.svg" alt="Arrow Right"/></a>';
    $(".table-footer__pagination-buttons").text("");
    $(".table-footer__pagination-buttons").append(buttons_text);
  };
  $.fn.displayPaginationButtons();

  $.fn.displayTableData = function () {
    var start_index = (page_number - 1) * records_per_page;
    var end_index = start_index + (records_per_page - 1);

    end_index =
      end_index >= jsonArray.length ? jsonArray.length - 1 : end_index;

    var inner_html = "";

    for (var i = start_index; i <= end_index; i++) {
      inner_html =
        inner_html +
        "<tr>" +
        "<td>" +
        jsonArray[i].customerName +
        "</td>" +
        "<td> " +
        jsonArray[i].company +
        "</td>" +
        "<td>" +
        jsonArray[i].phoneNumber +
        "</td>" +
        "<td>" +
        jsonArray[i].email +
        "</td>" +
        "<td>" +
        jsonArray[i].country +
        "</td>" +
        "<td>" +
        jsonArray[i].status +
        "</td>" +
        "</tr>";

      console.log($("tbody p").text());
      if (jsonArray[i].status == "Active") {
        $("tbody p").addClass("active");
      } else {
        $("tdoby p").addClass("inactive");
      }
    }
    $("table tbody tr").remove();
    $("tbody").append(inner_html);
    $(".page_index").removeClass("active");
    $("#page_index" + page_number).addClass("active");
  };

  $.fn.nextPage = function () {
    page_number++;
    $.fn.displayTableData();
  };
  $.fn.prevPage = function () {
    page_number--;
    $.fn.displayTableData();
  };
  $.fn.changePageIndex = function (index) {
    page_number = parseInt(index);
    $.fn.displayTableData();
  };
  $.fn.displayTableData();
});
