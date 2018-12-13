// Display Process Project
const all_sections = document.querySelectorAll("section");
const all_projects_detail = document.querySelectorAll(".projects__detail");

function displayProject() {
  const project_data_id = this.dataset.id;
  const filters = ["silvercar", "verb", "pbc", "fuel", "portfolio",
    "arrive-demo-app", "hangman"
  ];

  filters.forEach((filter) => {
    if (project_data_id === filter) {
      const process_id = document.querySelector(`#${project_data_id}`);
      all_sections.forEach((section) => {
        section.style.display = "none";
      });
      process_id.style.display = "block";
      window.scrollTo(0, 0);
    }
  });
}

all_projects_detail.forEach((project) => {
  project.addEventListener("click", displayProject);
});

// Close Process Project
const all_process_close = document.querySelectorAll(".process__close");

function closeProject() {
  all_sections.forEach((section) => {
    const section_class = section.classList.value;
    if (section_class !== "process") {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
    }
  });
}

all_process_close.forEach((close) => {
  close.addEventListener("click", closeProject);
})
