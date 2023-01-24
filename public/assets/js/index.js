
// $('.personal-data').on('mouseover',function (){
//     $('.personal-data-text').animate({
//         opacity: 1
//     }, 'fast');
// });

$("#digital-competence").click(function () {
    if ($('#digital-competence-body').css('opacity') == '0') {
        var principal_id = "digital-competence-header";
        var secondary_id = "digital-competence-body";
        if ($('#digital-competence-header').css('opacity') == '0') {
            principal_id = "digital-competence-body";
            secondary_id = "digital-competence-header";
        } else {
            secondary_id = "digital-competence-body";
            principal_id = "digital-competence-header";
        }

        proccesCardAnimations('digital-competence', 'digital-competence-rope', 'linkedin-qr', 'circle_digital', 'circle_digital_mobile');

        //       $('#personal-data').animate(
        //     {

        //         step: function (now) {
        //             $(this).css({'-moz-transform': scale(1, -1)});
        //             $(this).css({'-webkit-transform': scale(1, -1)});
        //             $(this).css({'-o-transform': scale(1, -1)});
        //             $(this).css({'-ms-transform': scale(1, -1)});
        //             $(this).css({'transform': scale(1, -1)});
        //         }
        //     }
        // );

        animate_div(principal_id, secondary_id);
    }
});

$("#job-experience").click(function () {
    if ($('#job-experience-body').css('opacity') == '0') {
        var principal_id = "job-experience-header";
        var secondary_id = "job-experience-body";
        if ($('#job-experience-header').css('opacity') == '0') {
            principal_id = "job-experience-body";
            secondary_id = "job-experience-header";
        } else {
            secondary_id = "job-experience-body";
            principal_id = "job-experience-header";
        }

        proccesCardAnimations('job-experience', 'job-experience-rope', 'email-qr', 'circle_experiencia', '');

        animate_div(principal_id, secondary_id);
    }
});

$("#professional-skills").click(function () {
    if ($('#professional-skills-body').css('opacity') == '0') {
        var principal_id = "professional-skills-header";
        var secondary_id = "professional-skills-body";
        if ($('#professional-skills-header').css('opacity') == '0') {
            principal_id = "professional-skills-body";
            secondary_id = "professional-skills-header";
        } else {
            secondary_id = "professional-skills-body";
            principal_id = "professional-skills-header";
        }

        proccesCardAnimations('professional-skills', 'professional-skills-rope', 'pdf-qr', 'circle_competencias', 'circle_competencias_mobile');

        animate_div(principal_id, secondary_id);
    }
});

function animate_div(principal_id, secondary_id) {
    $("#" + principal_id).animate({
        opacity: 0,
        width: "0",
        height: "0",
    }, 1000, function () {
        // Animation complete.
        $("#" + secondary_id).animate({
            opacity: 1,
            width: "100%",
            height: "100%",
        }, 2000, function () {
            // Animation complete.
        });
    });
}

function proccesCardAnimations(process_1, process_2, process_3, process_4, process_5 = '') {
    $('#' + process_1).animate({ borderSpacing: -90 }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'perspective(500px) rotateY(180deg) scale(-1, 1)');
            $(this).css('-moz-transform', 'perspective(500px) rotateY(180deg) scale(-1, 1)');
            $(this).css('transform', 'perspective(500px) rotateY(180deg) scale(-1, 1)');
        },
        duration: 'slow'
    }, 'linear');
    $('#' + process_2).animate({ borderSpacing: -90 }, {
        step: function (now, fx) {
            $(this).css('-webkit-transform', 'perspective(500px) rotateY(-180deg) scale(-1, 1)');
            $(this).css('-moz-transform', 'perspective(500px) rotateY(-180deg) scale(-1, 1)');
            $(this).css('transform', 'perspective(500px) rotateY(-180deg) scale(-1, 1)');
        },
        duration: 'slow'
    }, 'linear');

    $('#' + process_1).removeClass('cursor-pointer');

    $('#' + process_3).animate({
        opacity: 0,
    }, 1200, function () {
        // Animation complete.
        $('#' + process_3).addClass('d-none');
    });


    $('#' + process_4).animate({
        opacity: 0,
    }, 5000, function () {
        // Animation complete.
        $('#' + process_4).addClass('d-none');
    });

    if (process_5 != "") {
        $('#' + process_5).animate({
            opacity: 0,
        }, 5000, function () {
            // Animation complete.
            $('#' + process_4).addClass('d-none');
        });
    }

}

circle_digital = document.getElementById("circle_digital")
circlearray_digital = circle_digital.textContent.split('')
circle_digital.textContent = ''
for (var i = 0; i < circlearray_digital.length; i++) {
    circle_digital.innerHTML += '<span style="transform:rotate(' + ((i) * 13) + 'deg)">' + circlearray_digital[i] + '</span>'
}

// circle_competencias = document.getElementById("circle_competencias")
// circlearray_competencias = circle_competencias.textContent.split('')
// circle_competencias.textContent = ''
// for (var i = 0; i < circlearray_competencias.length; i++) {
//     circle_competencias.innerHTML += '<span style="transform:rotate(' + ((i) * -13) + 'deg)">' + circlearray_competencias[i] + '</span>'
// }