var FormValidator = function () {
	/*"use strict";
	var validateCheckRadio = function (val) {
        $("input[type='radio'], input[type='checkbox']").on('ifChecked', function(event) {
			$(this).parent().closest(".has-error").removeClass("has-error").addClass("has-success").find(".help-block").hide().end().find('.symbol').addClass('ok');
		});
    };*/ 
    var runValidator1 = function () {
        var form1 = $('#frmPedido');
        var errorHandler1 = $('#divValidacionErr'); //$('.errorHandler', form1);
        var successHandler1 = $('#divValidacionExt'); //$('.successHandler', form1);

        $('#frmPedido').validate({
            errorElement: "span", // contain the error msg in a span tag
            errorClass: 'help-block',
            errorPlacement: function (error, element) { // render error placement for each input type
                if (element.attr("type") == "radio" || element.attr("type") == "checkbox") { // for chosen elements, need to insert the error after the chosen container
                    error.insertAfter($(element).closest('.form-group').children('div').children().last());
                } else if (element.attr("name") == "dd" || element.attr("name") == "mm" || element.attr("name") == "yyyy") {
                    error.insertAfter($(element).closest('.form-group').children('div'));
                } else {
                    error.insertAfter(element);
                    // for other inputs, just perform default behavior
                }
            },
            ignore: "",
         	rules: {	mnuTipoDoc: { required: true, minlength: 1},
						txtDocumento: { required: true, minlength: 7, maxlength: 12, number: true},
						txtNombre: { required: true, minlength: 2, maxlength: 150},
						txtTelefonos: { required:true, minlength: 10, maxlength: 10, number: true},
						txtEmail: { minlength: 2, email: true},
						txtObservacion: { required: false}
					},
            messages: {
						mnuTipoDoc: "Debe seleccionar el tipo de documento.",
						txtDocumento: "Debe escribir un numero valido de documento: Minimo 7 digitos, maximo 12.",
						txtNombre : "Diligencie su nombre completo.",
						txtTelefonos : "El número de celular no es correcto. Debe tener 10 digitos.",
						txtEmail : "Debe introducir un email valido.",
						txtObservacion : "Escriba un mensaje valido."
					},
            invalidHandler: function (event, validator) { //display error alert on form submit
                successHandler.hide();
                errorHandler.show();
            },
            highlight: function (element) {
                $(element).closest('.help-block').removeClass('valid');
                // display OK icon
                $(element).closest('.form-group').removeClass('has-success').addClass('has-error').find('.symbol').removeClass('ok').addClass('required');
                // add the Bootstrap error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element).closest('.form-group').removeClass('has-error');
                // set error class to the control group
            },
            success: function (label, element) {
                alert('Lo hizo bien');
				label.addClass('help-block valid');
                // mark the current input as valid and display OK icon
                $(element).closest('.form-group').removeClass('has-error').addClass('has-success').find('.symbol').removeClass('required').addClass('ok');
            },
            submitHandler: function (form) {
                successHandler1.show();
                errorHandler1.hide();
                // submit form
                alert('Lo hizo bien');
				$('#frmPedido').submit();
            }
        });
    };
	return {
        //main function to initiate template pages
        init: function () {
        	//validateCheckRadio();
            runValidator1();
        }
    };
}();