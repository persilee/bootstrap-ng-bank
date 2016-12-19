define("init", [ "jquery" ], function(require, exports, module) {
    var $ = require("jquery");
    // var branch = require('js/main.js');
    var $table = $("#eventsTable");
    var $contactTable = $("#contactTable");
    $().ready(function() {
        seajs.use("js/main.js", function(branch) {
            branch.init();
        });
        if ($.cookie("themeColor") != "" && typeof $.cookie("themeColor") != "undefined") {
            $("#themes").attr("href", "./css/themes/" + $.cookie("themeColor") + ".css");
            $(".sidebar").attr("data-color", $.cookie("themeColor"));
            $("#minimizeSidebar").attr("data-color", $.cookie("themeColor"));
            $(".nav.navbar-nav .theme .badge").siblings().removeClass("active");
            $(".nav.navbar-nav .theme .badge[data-color=" + $.cookie("themeColor") + "]").addClass("active");
        } else {
            $("#themes").attr("href", "./css/themes/azure.css");
        }
        if ($.cookie("themeImg") != "" && typeof $.cookie("themeImg") != "undefined") {
            $(".sidebar .sidebar-background").css("background-image", 'url("' + $.cookie("themeImg") + '")');
            $number = $.cookie("themeImg").substr(-5, 1);
            $(".nav.navbar-nav .theme .img-holder").parent("li").removeClass("active");
            $(".nav.navbar-nav .theme .img-holder").parent("li").eq($number - 1).addClass("active");
        }
        if ($.cookie("switchImg") == "false" && typeof $.cookie("switchImg") != "undefined") {
            $(".sidebar .sidebar-background").css("background-image", 'url("")');
            $(".nav.navbar-nav .theme .adjustments-line .switch-onColor.img").bootstrapSwitch("state", false);
        }
        if ($.cookie("switchdebar") == "false" && typeof $.cookie("switchdebar") != "undefined") {
            $(".nav.navbar-nav .theme .adjustments-line .switch-onColor.debar").bootstrapSwitch("state", false);
            $("#minimizeSidebar").find("i").attr("class", "ti-menu-alt");
            $(".sidebar").addClass("mini");
            $("body").addClass("sidebar-mini");
            $(".sidebar .logo").addClass("hidden");
            $(".mini-logo").removeClass("hidden");
            $(".user .photo").width(50);
            $(".user .info").css("display", "none");
            $(".sidebar.mini .nav li a").attr("data-toggle", "");
        }
        var i = 2;
        window.operateEvents = {
            "click .add": function(e, value, row, index) {
                var $contactNumber = "0000000" + i;
                var newRow = row;
                newRow.contactNumber = $contactNumber;
                $contactTable.bootstrapTable("insertRow", {
                    index: i,
                    row: row
                });
                $contactTable.bootstrapTable("updateRow", {
                    index: i,
                    row: newRow
                });
                i++;
            },
            "click .like": function(e, value, row, index) {
                info = JSON.stringify(row).substring(0, 100);
                swal({
                    title: "You click view icon, row: ",
                    text: info,
                    confirmButtonClass: "btn btn-primary"
                });
                console.log(info);
                return false;
            },
            "click .edit": function(e, value, row, index) {
                info = JSON.stringify(row).substring(0, 100);
                swal({
                    title: "You click edit icon, row: ",
                    text: info,
                    confirmButtonClass: "btn btn-primary"
                });
                console.log(info);
                return false;
            },
            "click .remove1": function(e, value, row, index) {
                $contactTable.bootstrapTable("remove", {
                    field: "contactNumber",
                    values: [ row.contactNumber ]
                });
                return false;
            },
            "click .remove": function(e, value, row, index) {
                console.log(row);
                $contactTable.bootstrapTable("remove", {
                    field: "id",
                    values: [ row.id ]
                });
                return false;
            }
        };
        $(window).resize(function() {
            $table.bootstrapTable("resetView");
            $contactTable.bootstrapTable("resetView");
        });
    });
});
