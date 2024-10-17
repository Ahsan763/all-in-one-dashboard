	

$(document).ready(function() {
    // dropdown
    $('.drp_btn').click(function () {
        $('.drp_box').removeClass('active');
        $(this).children('.drp_box').slideToggle(0);
        $(this).children('.drp_box').addClass('active');
        $('.drp_box:not(.active)').slideUp(0);
	});
    // end drop down
    $('.unread').click(function () {
		$(this).removeClass('unread');
	});
    $('.navbar_search_box_btn').click(function(e) {
        e.preventDefault();
        if ($(window).width() < 767)
        {
            $('.navbar_search_box_mobile').toggleClass('active');
            return;
        }
    })
    $('.sidebar_btn').click(function () {
		$('.aside').toggleClass("active");
		$('.logo_wrapper').toggleClass("active");
	});

    
    // navbar sticky end
	$('.nav__toggler').click(function () {
		$(this).toggleClass('active');
		$('.nav-list').slideToggle();
	});
    
    // language toggle
    if(document.dir == "ltr"){
        $('.language_toggle_en').addClass("d-none");
        $('.language_toggle_ar').addClass("d-flex");
    }
    if(document.dir == "rtl"){
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').addClass("d-flex");
    }
    $('.language_toggle_en').click(function () {
        $('html').attr('dir', 'ltr');
        $('body').removeClass('rtl');
        localStorage.removeItem('rtl', 'true');
        $('.language_toggle_ar').removeClass("d-none");
        $('.language_toggle_en').addClass("d-none");
    })
    $('.language_toggle_ar').click(function () {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl');
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
        localStorage.setItem('rtl', 'true');
    })
    if (localStorage.getItem('rtl') === 'true') {
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
        $('body').addClass('rtl');
        $('html').attr('dir', 'rtl');
    }
    // language toggle

    // theme toggle
    if (localStorage.getItem('darkClass')) {
        $('body').addClass('dark');
        $('body').css('background-color','rgb(21, 33, 45)');
    }
    $('.theme_toggle_dark').click(function() {
        $('body').addClass('dark');
        localStorage.setItem('darkClass', 'true');
    });
    $('.theme_toggle_light').click(function() {
        $('body').removeClass('dark');
        localStorage.removeItem('darkClass');
    });
	// navbar end
    $('body').click(function() {
		$('.aside').removeClass("active");
		$('.drp_box').slideUp(0);
		$('.logo_wrapper').removeClass("active");
		$('.logo_wrapper').removeClass("active");
	});
    $('.asidbox').click(function() {
		$('.aside').removeClass("active");
		$('.logo_wrapper').removeClass("active");
	});
	$('.sidebar_btn').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    $('.drp_btn').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
	$('.aside').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});

    $('.asidbox-dropdown').click(function () {
        $(this).toggleClass('open')
        $(this).nextAll(".aside-drpdwn-list").eq(0).slideToggle(200);
    });
    $("#boxList").sortable({axis: 'y',stop: function (event, ui) {var Order = $(this).sortable('serialize').toString();}});
    $("#boxListgrid").sortable({axis: 'x y',stop: function (event, ui) {var Order = $(this).sortable('serialize').toString();}});
    $('.viewBtn--grid').click(function () {
        $(this).prevAll('.viewBtn').removeClass('active')
        $(this).addClass('active')
        $(this).nextAll('.viewBtn').removeClass('active')
        $(".top-nav__body").addClass('grid');
        localStorage.setItem("grid","true")
    });
    $('.viewBtn--list').click(function () {
        $(this).prevAll('.viewBtn').removeClass('active')
        $(this).addClass('active')
        $(this).nextAll('.viewBtn').removeClass('active')
        $(".top-nav__body").removeClass('grid');
        localStorage.removeItem("grid")
    });
    if(localStorage.getItem('grid') === 'true'){
        $('.viewBtn--grid').addClass('active')
        $('.viewBtn--list').removeClass('active')
        $('.top-nav__body').addClass('grid')
    }
    $('.box-btn').click(function () {
        $(this).toggleClass('active' )
        $(this).prev(".box-controls").slideToggle(100);
    });
    $( "#TopMenu" ).click(function() {
        if(!($( "#TopMenu" ).is(':checked'))){
            $ .alert("This section has been successfully stopped", {withTime: true,type: 'success',icon:'glyphicon glyphicon-heart',minTop: 80,autoClose:true,closeTime: 2000,animShow: 'animate__fadeInDown', animHide: 'fadeOut', });
        }
    });
    $(".table-view-btn--grid").click(function(){
        $(".table-view-btn--grid").addClass('active')
        $(".table-view-btn--list").removeClass('active')
        $(".card-body-for-list").addClass("d-none")
        $(".card-body-for-grid").removeClass("d-none")
        localStorage.setItem("card-body-for-grid","true")
    })
    $(".table-view-btn--list").click(function(){
        $(".table-view-btn--list").addClass("active")
        $(".table-view-btn--grid").removeClass("active")
        $(".card-body-for-grid").addClass("d-none")
        $(".card-body-for-list").removeClass("d-none")
        localStorage.removeItem("card-body-for-grid")
    })
    if(localStorage.getItem("card-body-for-grid") === "true"){
        $(".table-view-btn--grid").addClass('active')
        $(".table-view-btn--list").removeClass('active')
        $(".card-body-for-list").addClass("d-none")
        $(".card-body-for-grid").removeClass("d-none")
    }
    $(".grid-card-in_btn").click(function(){
        $(this).toggleClass("active")
        $(this).nextAll(".grid-card-in__btn-wrapr").slideToggle()
    })
    $("#createnewlink").click(function(){
        $(this).nextAll(".new-link-box").slideToggle()
    })
    $(".reject-btn").click(function(){
        $(this).parent('.acc-rej-btn-wrpr').addClass("d-none");
        $(this).parent('.acc-rej-btn-wrpr').nextAll('.reject-btn-text').addClass("d-flex")
    })
    $(".accept-btn").click(function(){
        $(this).parent('.acc-rej-btn-wrpr').addClass("d-none")
        $(this).parent('.acc-rej-btn-wrpr').nextAll('.acc-btn-text').addClass("d-flex")
    })
    $( ".perms-row1 .checklist-col" ).slice( 0, 20 ).addClass( "d-block" );
    $(".perms-row-datashow1").click(function(){
        $(this).toggleClass("active")
        $( ".perms-row1 .checklist-col" ).slice( 20, 1000 ).toggleClass( "d-block" );
    })
    $( ".perms-row2 .checklist-col" ).slice( 0, 20 ).addClass( "d-block" );
    $(".perms-row-datashow2").click(function(){
        $(this).toggleClass("active")
        $( ".perms-row2 .checklist-col" ).slice( 20, 100 ).toggleClass( "d-block" );
    })
    $( ".enableDisableMod1 .checklist" ).slice( 0, 6 ).addClass( "d-flex" );
    $(".perms-row-datashow3").click(function(){
        $(this).toggleClass("active")
        $( ".enableDisableMod1 .checklist" ).slice( 6, 100 ).toggleClass( "d-flex" );
    })
    $( ".controlRename .controlRename__input" ).slice( 0, 3 ).addClass( "d-flex" );
    $(".perms-row-datashow4").click(function(){
        $(this).toggleClass("active")
        $( ".controlRename .controlRename__input" ).slice( 3, 100 ).toggleClass( "d-flex" );
    })
    









    function touchHandler(event) {
        var touch = event.changedTouches[0];
        var simulatedEvent = document.createEvent("MouseEvent");
            simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);
    
        touch.target.dispatchEvent(simulatedEvent);
        event.preventDefault();
    }
    function init() {
        document.addEventListener("touchstart", touchHandler, true);
        document.addEventListener("touchmove", touchHandler, true);
        document.addEventListener("touchend", touchHandler, true);
        document.addEventListener("touchcancel", touchHandler, true);
    }
    $(".input-id").fileinput({
		theme: "explorer-fa6",
		uploadUrl: "/file-upload-batch/2",
		allowedFileExtensions: ['jpg', 'png', 'gif'],
		overwriteInitial: false,
		initialPreviewAsData: true,
		maxFileSize: 10000,
		removeFromPreviewOnError: true,
		initialPreviewDownloadUrl: 'https://picsum.photos/id/{key}/1920/1080'
	});
    $('.pro-slider').owlCarousel({
        loop:true,
        items:1,
        margin:10,
        dots:false,
        nav:true,
        navText: ["<img src='assets/images/prev.png' >","<img src='assets/images/next.png'>"]
    })
    $(".table_data_img").click(function(){
        $(this).toggleClass("active")
    })
});