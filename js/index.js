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
  'English',
  'Spanish',
  'Writing',
  'Photography',
  'Learning'
];

var skillCount = 0;

function changeSkills() {
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