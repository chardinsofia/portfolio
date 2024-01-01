$(function() {
    $(".toggle, .item").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(".toggle").find("a").html("<i class='fas fa-bars'></i>");
        }

        else {
            $(".item").addClass("active");
            $(".toggle").find("a").html("<i class='fas fa-times'></i>");
        }
    });
});
var skills = [
              'HTML',
              'CSS',
              'JavaScript',
              'Illustrator',
              'Premiere Pro',
              'SASS',
              'Design',
              'Creativity',
              'Spanish',
              'Writing',
              'Photography',
            ];

var skillsEn = [
              'HTML',
              'CSS',
              'JavaScript',
              'Illustrator',
              'Premiere Pro',
              'SASS',
              'Design',
              'Creativity',
              'Spanish',
              'Writing',
              'Photography',
            ];

var skillsEs = [
              'HTML',
              'CSS',
              'JavaScript',
              'Illustrator',
              'Premiere Pro',
              'SASS',
              'Diseño',
              'Creatividad',
              'Inglés',
              'Escritura',
              'Fotografía',
            ];

var skillCount = 0;

function changeSkills() {
    var lang = $('#lang-switch').val();
    switch (lang) {
        case 'en':
            skills = skillsEn;
        break;
        case 'es':
            skills = skillsEs;
        break;
    }

  renderSkills(skillCount);
  if (skillCount < skills.length - 1) {
    skillCount++;
  } else {
    skillCount = 0;
  }
  setTimeout(function() {
      changeSkills();
  }, 1000);
}

function renderSkills(n) {
  document.getElementById("skill").setAttribute("data-content", skills[n]);
}
changeSkills();


$('[lang]').hide(); // hide all lang attributes on start.
$('[lang="es"]').show(); // show just Korean text (you can change it)
$('#lang-switch').change(function () { // put onchange event when user select option from select
    var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
    switch (lang) {
        case 'en':
            $('[lang]').hide();
            $('[lang="en"]').show();
        break;
        case 'es':
            $('[lang]').hide();
            $('[lang="es"]').show();
        break;
        default:
            $('[lang]').hide();
            $('[lang="es"]').show();
        }
});