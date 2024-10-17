$(document).ready(function(){
    
    $('.contact-form__field:not(.email):not(.phone)').keyup(function () {
        if ($(this).val().length === 0) {
            $(this).val($.trim($(this).val()));
            $(this).removeClass('field-white');
            $(this).removeClass('field-red');
        } else if ($(this).val().length > 1) {
            $(this).addClass('field-white');
            $(this).removeClass('field-red');
        } else {
            $(this).val($.trim($(this).val()));
            $(this).removeClass('field-white');
            $(this).addClass('field-red');
        }
    })
    $(".email").keyup(function () {
        var email = $(".email").val();
        if (isValidEmailAddress(email)) {
            $('.email').addClass('field-white');
            $('.email').removeClass('field-red');
        } else {
            $('.email').addClass('field-red');
            $('.email').removeClass('field-white');
        }
    });
    $(".phone").keyup(function () {
        var phone = $(".phone").val();
        if (getValidNumber(phone)) {
            $('.phone').addClass('field-white');
            $('.phone').removeClass('field-red');
        } else {
            $('.phone').addClass('field-red');
            $('.phone').removeClass('field-white');
        }
    });
    function getValidNumber(value)
    {
        value = $.trim(value).replace(/\D/g, '');
        if (value.substring('+') == '1') {
            value = value.substring(1);
        }
        if (value.length == 14) {
            return value;
        }
        return false;
    }
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    }
    $('.contact-form__field.name').keyup(function () {
        if (
            $(this).hasClass('field-white') &&
            $('.contact-form__field.phone').hasClass('field-white') &&
            $('.contact-form__field.message').hasClass('field-white') &&
            $('.contact-form__field.email').hasClass('field-white')
        ) {
            $('.contact-form__btn').removeClass('disabled');
        } else {
            $('.contact-form__btn').addClass('disabled');
        }
    });
    $('.contact-form__field.email').keyup(function () {
        if (
            $(this).hasClass('field-white') &&
            $('.contact-form__field.phone').hasClass('field-white') &&
            $('.contact-form__field.name').hasClass('field-white') &&
            $('.contact-form__field.message').hasClass('field-white')
        ) {
            $('.contact-form__btn').removeClass('disabled');
        } else {
            $('.contact-form__btn').addClass('disabled');
        }
    });
    $('.contact-form__field.phone').keyup(function () {
        if (
            $(this).hasClass('field-white') &&
            $('.contact-form__field.email').hasClass('field-white') &&
            $('.contact-form__field.name').hasClass('field-white') &&
            $('.contact-form__field.message').hasClass('field-white')
        ) {
            $('.contact-form__btn').removeClass('disabled');
        } else {
            $('.contact-form__btn').addClass('disabled');
        }
    });
    $('.contact-form__field.message').keyup(function () {
        if (
            $(this).hasClass('field-white') &&
            $('.contact-form__field.email').hasClass('field-white') &&
            $('.contact-form__field.name').hasClass('field-white') &&
            $('.contact-form__field.phone').hasClass('field-white')
        ) {
            $('.contact-form__btn').removeClass('disabled');
        } else {
            $('.contact-form__btn').addClass('disabled');
        }
    });
    $('.contact-form__btn').click(function(){
        $('.form').slideUp();
    });
});