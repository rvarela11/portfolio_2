// ----------------------------------------
// Global elements
// ----------------------------------------

const projects = document.getElementById("projects");
const projectsDetailsInfo = [
  { 
    id: 'keep-austin-nerdy',
    description: 'Austin trivia quiz app',
    image: 'assets/keep-austin-nerdy-logo.jpg',
    links: {
      code1: "https://github.com/rvarela11/keep-austin-nerdy",
      code2: "https://github.com/rvarela11/phunware-apollo",
      site: "http://robertvarela.com/keep-austin-nerdy"
    },
    role: 'Front-End Developer',
    tech: 'react',
    techs: {
      tech1: ['React', 'Redux'],
      tech2: ['React', 'Apollo 2.1', 'GraphQL', 'Node'],
      other: [ 'SCSS', 'Responsive design', 'Eslint Airbnb', 'Enzyme', 'Material UI',]
    },
    title: 'Keep Austin Nerdy Quiz',
    type: 'Personal'
  },
  { 
    id: 'silvercar',
    description: 'A search page where a user can find their location by city name.',
    image: 'https://s3.amazonaws.com/development-silvercar-static-assets/assets/web-assets/silvercar-by-audi.svg',
    links: {
      code1: "https://github.com/rvarela11/silvercar",
      code2: "https://github.com/rvarela11/silvercar-apollo",
      site: "http://robertvarela.com/silvercar"
    },
    role: 'Front-End Developer',
    tech: 'react',
    techs: {
      tech1: ['React', 'Redux'],
      tech2: ['React', 'Apollo 2.1', 'GraphQL', 'Node'],
      other: [ 'SCSS', 'Responsive design', 'Eslint Airbnb', 'Enzyme', 'Material UI',]
    },
    title: 'Silvercar Demo',
    type: 'Personal'
  },
  { 
    id: 'verb',
    description: 'A dashboard that allows an administrator to search for a specific user and add them to a group (IT, Sales, Support).  Also, the administrator is able to view all users in a specific group.',
    image: 'assets/verb-logo.png',
    links: {
      code1: "https://github.com/rvarela11/verb-2",
      site: "http://robertvarela.com/verb-2/"
    },
    role: 'Front-End Developer',
    tech: 'react',
    techs: {
      tech1: ['React', 'Redux', 'Vanilla JavaScript']
    },
    title: 'Verb Demo',
    type: 'Personal'
  },
  { 
    id: 'arrive-demo-app',
    description: 'A mobile application that allows users to upload and edit a document.',
    image: 'assets/arrive-demo-app.jpg',
    links: {
      code1: "https://github.com/rvarela11/arrive-mobile-app-demo"
    },
    role: 'Front-End Developer',
    tech: 'react native',
    techs: {
      tech1: ['React Native', 'Redux']
    },
    title: 'Arrive Demo App',
    type: 'Personal'
  },
  { 
    id: 'portfolio',
    description: 'Portfolio done in vanilla javascript that acts like a single page application.',
    image: 'assets/rv-logo.jpg',
    links: {
      code1: "https://github.com/rvarela11/rvarela11.github.io",
      site: "http://robertvarela.com"
    },
    role: 'Front-End Developer',
    tech: 'vanilla javascript',
    techs: {
      tech1: ['Vanilla JavaScript']
    },
    title: 'Portfolio',
    type: 'Personal'
   },
   { 
    id: 'bubblicious',
    description: 'A bubble game done in vanilla javascript.',
    image: 'assets/game-boy-logo.svg',
    links: {
      code1: "https://github.com/rvarela11/bubblicious",
      site: "http://robertvarela.com/bubblicious"
    },
    role: 'Front-End Developer',
    tech: 'vanilla javascript',
    techs: {
      tech1: ['Vanilla JavaScript']
    },
    title: 'Bubblicious',
    type: 'Personal'
   }
];

// ----------------------------------------
// Utils
// ----------------------------------------

const updateLabel = (label) => {
  const num = label.match(/\d+/g);
  const word = label.match(/[a-zA-Z]+/g);
  const upperCaseLabel = word[0].charAt(0).toUpperCase() + word[0].slice(1);
  const newLabel = Number(num) ? `${upperCaseLabel} - V${num}` : upperCaseLabel;
  return newLabel;
}

// ----------------------------------------
// Create Projects Section
// ----------------------------------------

const createProjectsSection = () => {

  // 1. Create the 'Projects' header
  const section_projects__title = document.createElement('div');
  section_projects__title.setAttribute("class", "name");
  section_projects__title.textContent = 'Projects';
  projects.appendChild(section_projects__title);

  // 2. Create the project__header
  const project_headers = ['react', 'react native', 'vanilla javascript'];
  project_headers.forEach((header) => {
    const project__header = document.createElement('h2');
    project__header.setAttribute("class", "project__header");
    project__header.textContent = header;
    projects.appendChild(project__header);
  });

  // 3. Create the projects__div
  const all_project_headers = document.querySelectorAll(".project__header");
  all_project_headers.forEach((header) => {
     const projects__div = document.createElement('div');
    header.appendChild(projects__div);

    // 4. Create the projects__detail
    projectsDetailsInfo.forEach(({ id, image, tech }) => {
      if(header.textContent === tech) {
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
// Create Project Pages
// ----------------------------------------

const createProcessSection = () => {

  projectsDetailsInfo.forEach(({ id, description, links, role, techs, title, type }) => {

    // 1. Create the section element
    const section_process = document.createElement('section');
    section_process.setAttribute("id", id);
    section_process.setAttribute("class", "process");

    // 2. Create <a/> to close
    const process__close = document.createElement('a');
    process__close.setAttribute("href", "#projects");
    process__close.setAttribute("class", "process__close");
    section_process.appendChild(process__close);

    // 3. Create laptop with image
    const css_mb = document.createElement('div');
    css_mb.setAttribute("class", "css-mb with-glare");
    section_process.appendChild(css_mb);

    const mb_display_position = document.createElement('div');
    mb_display_position.setAttribute("class", "mb-display-position");
    css_mb.appendChild(mb_display_position);

    const mb_display = document.createElement('div');
    mb_display.setAttribute("class", "mb-display");
    mb_display_position.appendChild(mb_display);

    const mb_screen_position = document.createElement('div');
    mb_screen_position.setAttribute("class", "mb-screen-position");
    mb_display.appendChild(mb_screen_position);

    const mb_screen = document.createElement('div');
    mb_screen.setAttribute("class", "mb-screen");
    mb_screen_position.appendChild(mb_screen);

    const screen_image = document.createElement('img');
    screen_image.setAttribute("src", `assets/${id}-screenshot.png`);
    screen_image.setAttribute("alt", `${id} home page`);
    mb_screen.appendChild(screen_image);

    const mb_body = document.createElement('div');
    mb_body.setAttribute("class", "mb-body");
    css_mb.appendChild(mb_body);

    const mb_bottom_cover = document.createElement('div');
    mb_bottom_cover.setAttribute("class", "mb-bottom-cover");
    css_mb.appendChild(mb_bottom_cover);

    // 4. Create project div
    const project = document.createElement('div');
    project.setAttribute("class", "project");
    section_process.appendChild(project);

    // 5. Create project__title
    const project__title = document.createElement('div');
    project__title.setAttribute("class", "project__title");
    project.appendChild(project__title);

    const project__info = document.createElement('div');
    project__info.setAttribute("class", "col-md-6");
    project__title.appendChild(project__info);

    const project__info_title_label = document.createElement('h3');
    project__info_title_label.textContent = 'Title';
    project__info.appendChild(project__info_title_label);

    const project__info_title = document.createElement('h4');
    project__info_title.textContent = title;
    project__info.appendChild(project__info_title);

    const project__info_role_label = document.createElement('h3');
    project__info_role_label.textContent = 'Role';
    project__info.appendChild(project__info_role_label);

    const project__info_role = document.createElement('h4');
    project__info_role.textContent = role;
    project__info.appendChild(project__info_role);

    const project__info_type_label = document.createElement('h3');
    project__info_type_label.textContent = 'Project Type';
    project__info.appendChild(project__info_type_label);

    const project__info_type = document.createElement('h4');
    project__info_type.textContent = type;
    project__info.appendChild(project__info_type);


    // 6. Create project__technologies
    const project__technologies = document.createElement('div');
    project__technologies.setAttribute("class", "col-md-6");
    project__title.appendChild(project__technologies);

  
    for (var key in techs) {
      const objectLength = Object.keys(links).length;
      const project__technologies_label = document.createElement('h3');
      project__technologies_label.textContent = (objectLength <= 2 && key === 'tech1') ? updateLabel('tech') : updateLabel(key);
      project__technologies.appendChild(project__technologies_label);

      const project__technologies_list = document.createElement('ul');
      project__technologies_list.setAttribute("class", "process__project__title-technologies");
      project__technologies.appendChild(project__technologies_list);

      techs[key].forEach(tech => {
        const project__technologies_li = document.createElement('li');
        project__technologies_li.textContent = tech;
        project__technologies_list.appendChild(project__technologies_li);
      });
    }

    // 7. Create project__description
    const project__description_row = document.createElement('div');
    project__description_row.setAttribute("class", "row project__description");
    project.appendChild(project__description_row);

    const project__description = document.createElement('div');
    project__description.setAttribute("class", "col-md-6");
    project__description_row.appendChild(project__description);

    const project__description_label = document.createElement('h3');
    project__description_label.setAttribute("class", "name");
    project__description_label.textContent = 'Description';
    project__description.appendChild(project__description_label);

    const project__description_info = document.createElement('p');
    project__description_info.textContent = description;
    project__description.appendChild(project__description_info);

    // 8. Create links
    const project__links_col = document.createElement('div');
    project__links_col.setAttribute("class", "col-md-6");
    project__description.appendChild(project__links_col);

    const project__links_title = document.createElement('div');
    project__links_title.setAttribute("class", "project__title");
    project__links_col.appendChild(project__links_title);

    const project__links_label = document.createElement('h3');
    project__links_label.textContent = 'Links';
    project__links_title.appendChild(project__links_label);

    const project__links_list = document.createElement('ul');
    project__links_list.setAttribute("class", "process__project__title-links");
    project__links_title.appendChild(project__links_list);

    for (var key in links) {
      const objectLength = Object.keys(links).length;
      const project__links_li = document.createElement('li');
      const project__links_a = document.createElement('a');
      project__links_a.setAttribute("class", "process__project__title-links");
      project__links_a.setAttribute("href", links[key]);
      project__links_a.textContent = (objectLength <= 2 && key === 'code1') ? updateLabel('code') : updateLabel(key);
      project__links_li.appendChild(project__links_a); 
      project__links_list.appendChild(project__links_li);
    }

    projects.parentNode.insertBefore(section_process, projects.nextSibling)
  });
}
createProcessSection();

// ----------------------------------------
// Display Process Project
// ----------------------------------------

const all_sections = document.querySelectorAll("section");
const all_projects_detail = document.querySelectorAll(".projects__detail");

function displayProject() {
  const project_data_id = this.dataset.id;
  const filters = ["wellsmith", "keep-austin-nerdy", "silvercar", "verb", "portfolio",
    "arrive-demo-app", "bubblicious"];

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
});
