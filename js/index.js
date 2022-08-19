$(document).ready(function(){
    if($('#menuToggle').is(':checked')){
        $('html').addClass('ulhtml')
    }
    else{
        $('html').removeClass('ulhtml')
    }
});


/*START - DOWNLOAD RESUME */
$('#BtnCV').click(function(){
    $.blockUI({
        // message: `<h1><img src="static/images/loading-spinner-grey.gif" /> Please Wait...</h1>`,
        message: `<h1><img src="images/download.gif" class="img-fluid" /></h1>`,            
   });       
   setTimeout($.unblockUI, 9000);
//    $('#DownloadCV').attr("href", "images/Uvesh_Resume.pdf");
});

/*END - DOWNLOAD RESUME */

/*START - SHOW & HIDE ALL TYPES OF TOASTER MESSAGES*/
function ShowToastrMsg(MsgType, MsgPosition, MsgText, MsgTimeOut) {
    toastr.options =
    {
        "closeButton": true,
        "debug": false,
        "positionClass": MsgPosition,
        "onclick": null,
        "showEasing": "linear",
        "showMethod": "show",
        "timeOut": MsgTimeOut
    }
    if (MsgType == 'Success') {
        toastr.success(MsgText, 'Success');
    } else if (MsgType == 'Error') {
        toastr.error(MsgText, 'Error');
    } else if (MsgType == 'Warning') {
        toastr.warning(MsgText, 'Warning');
    }
    // } else {
    //     toastr.info(MsgText, 'Information');
    // }
}

function HideToastrMsg() {
    toastr.clear();
}
/*END - SHOW & HIDE ALL TYPES OF TOASTER MESSAGES*/


/*START - SHOW & HIDE ALL TYPES OF MESSAGES*/
function ShowMessage(DivId, MsgType, MsgHeading, MsgText, MsgTimeout) {
    //alert(DivId + ',' + MsgType + ',' + MsgHeading + ',' + MsgText + ',' + MsgTimeout);
    $("#" + DivId).show();
    $("#" + DivId).addClass(MsgType);
    $("#SpnMsgHeader").text(MsgHeading);
    $("#SpnErrorMsg").html(MsgText);
    if (MsgTimeout == 0) {
        $("#" + DivId).show();
    }
    else {
        $("#" + DivId).fadeOut(MsgTimeout);
    }
}

function HideMessage(DivId) {
    //alert(DivId);
    $("#" + DivId).hide();
    $("#" + DivId).removeClass();
}
/*END - SHOW & HIDE ALL TYPES OF MESSAGES*/

/*START - SAVE DATA OPERATIONS*/
$("#btnSubmit").click(function () {
    SaveData();
});

function SaveData() {
    var ErrMsg = '';     

    if ($("#firstname").val().trim() == '') {
        ErrMsg += '<br/>-- First Name.';
    }   
    if ($("#lastname").val().trim() == '') {
        ErrMsg += '<br/>-- Last Name.';
    }  
    if ($("#email").val().trim() == '') {
        ErrMsg += '<br/>-- Email.';
    }  
    if ($("#message").val().trim() == '') {
        ErrMsg += '<br/>-- Message.';
    }  

    if (ErrMsg.length != 0) {
        ShowMessage('DivDisplayMsg', "alert alert-warning TextBlack", "You have some form errors. Please check below.", '<br/>' + ErrMsg, 0);
    }

    else{      
        $.blockUI({
            // message: `<h1><img src="static/images/loading-spinner-grey.gif" /> Please Wait...</h1>`,
            message: `<h1><img src="images/spinner2.gif" class="img-fluid" /></h1>`,            
       }); 
       setTimeout($.unblockUI, 1000);
       HideMessage("DivDisplayMsg");
       HideToastrMsg();
       ShowToastrMsg("Success", "toast-top-full-width", "Sent SuccessFully.", 3000);                
    }    
}
/*END - SAVE DATA OPERATIONS*/

/*START - RESET DATA OPERATIONS*/
$("#btnReset").click(function () {
    ResetData();
});

function ResetData(){
    $('#firstname').val('');
    $('#lastname').val('');
    $('#email').val('');
    $('#message').val('');
    HideMessage("DivDisplayMsg");
}

/*END - RESET DATA OPERATIONS*/

$('.close').click(function(){
    HideMessage('DivDisplayMsg');
})

$('.facebook').click(function(){
    $.blockUI({
        message: `<h1><img src="images/spinner2.gif" class="img-fluid" /></h1>`,        
   });
   setTimeout($.unblockUI, 2000);
   window.location.href = "https://www.facebook.com/Uveshshaikhh";       
 
});

$('.instagram').click(function(){
    $.blockUI({
        message: `<h1><img src="images/spinner2.gif" class="img-fluid" /></h1>`,        
   });
   setTimeout($.unblockUI, 2000);
   window.location.href = "http://instagram.com/xx.uvesh_shaikh.xx";       
 
});

$('.whatsapp').click(function(){
    $.blockUI({
        message: `<h1><img src="images/spinner2.gif" class="img-fluid" /></h1>`,                        
   });
   setTimeout($.unblockUI, 2000);
   window.location.href = "https://wa.me/+919054056443";        
})

/* START TYPEIT */

new TypeIt("#typename", {
  strings: "Uvesh Shaikh",
  speed: 100,
//   loop: true,
}).go();


/* END TYPEIT */

/* START BACK TO TOP */

var btn = $('#backbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

/* END BACK TO TOP */

