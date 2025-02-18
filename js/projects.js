const projects = [
  { id: 1, name: "Otto Ai", video: "", link: "https://otto-ai.onrender.com/" },
  { id: 2, name: "Upfront", video: "", link: "https://upfront.onrender.com/" },
  { id: 3, name: "Gerayo", video: "", link: "https://gerayo.onrender.com/" },
  {
    id: 4,
    name: "QuoteMate",
    video: "",
    link: "https://quotemate.onrender.com/",
  },
  {
    id: 5,
    name: "Countify",
    video: "",
    link: "https://countify.onrender.com/",
  },
];

const userList = document.querySelector(".project_grid");
userList.innerHTML = projects
  .map(
    (project) =>
      `<div class='project'>
        <div class='title'>
            <h1>${project.id}. </h1>
            <h1>${project.name}</h1>
        </div>
        <div class='icons'>
            <button onclick="handleOpenProjectsModal()">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-diagonal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 4l4 0l0 4" /><path d="M14 10l6 -6" /><path d="M8 20l-4 0l0 -4" /><path d="M4 20l6 -6" /></svg>    
            </button>
            <a href="${project.link}" target='_blank'>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>    
            </a>
        </div>
    </div>`
  )
  .join("");

const projectOverlay = document.querySelector(".overlay");
function handleOpenProjectsModal() {
    projectOverlay.classList.add('show')
}

function handleCloseProjectsModal() {
    projectOverlay.classList.remove('show')
}