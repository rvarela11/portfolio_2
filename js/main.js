// ----------------------------------------
// Create Projects Section
// ----------------------------------------

const createProjectsSection = () => {

  // 1. Create the 'Projects' header
  const projects = document.getElementById("projects");
  const section_projects__title = document.createElement('div');
  section_projects__title.setAttribute("class", "name");
  section_projects__title.innerText = 'Projects';
  projects.appendChild(section_projects__title);

  // 2. Create the project__header
  const project_headers = ['react', 'react native', 'vanilla javascript'];
  project_headers.forEach((header) => {
    const project__header = document.createElement('h2');
    project__header.setAttribute("class", "project__header");
    project__header.innerText = header;
    projects.appendChild(project__header);
  });

  // 3. Create the projects__div
  const projectsDetailsInfo = [
    { id: 'silvercar', image: 'https://s3.amazonaws.com/development-silvercar-static-assets/assets/web-assets/silvercar-by-audi.svg', tech: 'react' },
    { id: 'verb', image: 'assets/verb-logo.png', tech: 'react' },
    { id: 'pbc', image: 'assets/pbc-logo.jpg', tech: 'react'  },
    { id: 'fuel', image: 'assets/fuel-logo.jpg', tech: 'react' },
    { id: 'arrive-demo-app', image: 'assets/arrive-demo-app.jpg', tech: 'react native' },
    { id: 'portfolio', image: 'assets/rv-logo.jpg', tech: 'vanilla javascript' }
  ];
  const all_project_headers = document.querySelectorAll(".project__header");
  all_project_headers.forEach((header) => {
     const projects__div = document.createElement('div');
    header.appendChild(projects__div);

    // 4. Create the projects__detail
    projectsDetailsInfo.forEach(({ id, image, tech }) => {
      const headerLowerCase = header.innerText.toLowerCase();
      if(headerLowerCase === tech) {
        const projects__detail = document.createElement('div');
        projects__detail.setAttribute('data-id', id);
        projects__detail.setAttribute("class", "projects__detail");
        projects__div.appendChild(projects__detail);
        
        // 5. Create the projects__detail_image
        const projects__detail_image = document.createElement('div');
        projects__detail_image.setAttribute("class", "projects__detail-image");
        projects__detail_image.style.backgroundImage = `url(${image})`;
        projects__detail.appendChild(projects__detail_image);
      }
      return ;
    });
  });
};
createProjectsSection();

// ----------------------------------------
// Display Process Project
// ----------------------------------------

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

// ----------------------------------------
// Close Process Project
// ----------------------------------------

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
