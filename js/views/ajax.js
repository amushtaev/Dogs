//Подгрузка контента при прокрутке страницу вниз
$(function(){

    var content = $("#content"),
        loading = "<img src='./images/Loading_icon.gif' alt='Loading' />";

    // Подгрузка первых записей
    $.ajax({
        url: "http://adesign.dp.ua/load_00.html",
        dataType: "html",
        //dataType: "json",
        type: "GET",
        data: {type: "start"},
        success: function(data){

            if(data){

                content.append(data);
                content.find(".jscroll-loading:first").slideUp(700, function(){

                    $(this).remove();
                });

                // Вызываем плагин
                $("#content").jscroll({
                    autoTriggerUntil: 2,
                    loadingHtml: loading
                });
            };
        },
        beforeSend: function(){

            content.append("<div class='jscroll-loading'>" + loading + "</div>");
        }
    });
});