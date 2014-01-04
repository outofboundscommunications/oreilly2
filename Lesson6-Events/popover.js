$(document).ready(function() {
    $("div.companyData").hide();
    $("div.companyDataTriangle").hide();
    $("span.companyRollover").mouseover(function(evt) {
        var id = $(this).attr("id");
        var $companyData = $("div.companyData[data-ticker='" + id + "']");
        $companyData
                .css({ top: evt.pageY + 30, left: evt.pageX-50 })
                .toggle(100);
        $("div.companyDataTriangle")
                .css({ top: evt.pageY + 18, left: evt.pageX-12 })
                .toggle(0);
    });
});  