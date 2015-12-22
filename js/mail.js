$(document).ready(function(){
    $('#btn_submit--chasopys').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--chasopys').val();
        var coworking_from    = $('#coworking--chasopys').val();
        var phone    = $('#phone--chasopys').val();
        var email = $('#email--chasopys').val();
        var from_date   = $('#fromdate--chasopys').val();
        var to_date   = $('#todate--chasopys').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});


$(document).ready(function(){
    $('#btn_submit--spalah').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--spalah').val();
        var coworking_from    = $('#coworking--spalah').val();
        var phone    = $('#phone--spalah').val();
        var email = $('#email--spalah').val();
        var from_date   = $('#fromdate--spalah').val();
        var to_date   = $('#todate--spalah').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});


$(document).ready(function(){
    $('#btn_submit--impacthub').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--impacthub').val();
        var coworking_from    = $('#coworking--impacthub').val();
        var phone    = $('#phone--impacthub').val();
        var email = $('#email--impacthub').val();
        var from_date   = $('#fromdate--impacthub').val();
        var to_date   = $('#todate--impacthub').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});

$(document).ready(function(){
    $('#btn_submit--betaplace').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--betaplace').val();
        var coworking_from    = $('#coworking--betaplace').val();
        var phone    = $('#phone--betaplace').val();
        var email = $('#email--betaplace').val();
        var from_date   = $('#fromdate--betaplace').val();
        var to_date   = $('#todate--betaplace').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});


$(document).ready(function(){
    $('#btn_submit--startupdepot').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--startupdepot').val();
        var coworking_from    = $('#coworking--startupdepot').val();
        var phone    = $('#phone--startupdepot').val();
        var email = $('#email--startupdepot').val();
        var from_date   = $('#fromdate--startupdepot').val();
        var to_date   = $('#todate--startupdepot').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});


$(document).ready(function(){
    $('#btn_submit--icoworking').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--icoworking').val();
        var coworking_from    = $('#coworking--icoworking').val();
        var phone    = $('#phone--icoworking').val();
        var email = $('#email--icoworking').val();
        var from_date   = $('#fromdate--icoworking').val();
        var to_date   = $('#todate--icoworking').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});


$(document).ready(function(){
    $('#btn_submit--imaguru').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--imaguru').val();
        var coworking_from    = $('#coworking--imaguru').val();
        var phone    = $('#phone--imaguru').val();
        var email = $('#email--imaguru').val();
        var from_date   = $('#fromdate--imaguru').val();
        var to_date   = $('#todate--imaguru').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});


$(document).ready(function(){
    $('#btn_submit--spalahdp').click(function(){
        // собираем данные с формы
        var coworking_to    = $('#coworking_to--spalahdp').val();
        var coworking_from    = $('#coworking--spalahdp').val();
        var phone    = $('#phone--spalahdp').val();
        var email = $('#email--spalahdp').val();
        var from_date   = $('#fromdate--spalahdp').val();
        var to_date   = $('#todate--spalahdp').val();
       
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "coworking_to":    coworking_to,
                "coworking_from":    coworking_from,
                "phone": phone,
                "email":   email,
                "from_date":   from_date,
                "to_date":   to_date


            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                //$('form').find('input[type=text]').val('');
                if($('.messages').html() == '<span style="color: #fff;">Сообщение успешно отправлено!</span>') {
                    window.location.href = "thank-you.html";
                }
            }
        });
    });
});