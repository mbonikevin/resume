const projects = [
  {
    id: 1,
    name: "Otto Ai",
    link: "https://otto-ai.onrender.com/",
  },
  {
    id: 2,
    name: "Upfront",
    link: "https://upfront.onrender.com/",
  },
  {
    id: 3,
    name: "Gerayo",
    link: "https://gerayo.onrender.com/",
  },
  {
    id: 4,
    name: "QuoteMate",
    link: "https://quotemate.onrender.com/",
  },
  {
    id: 5,
    name: "Countify",
    link: "https://countify.onrender.com/",
  },
];

const userList = document.querySelector(".project_grid");
userList.innerHTML = projects
  .map(
    (project) =>
      `<a href="${project.link}" target='_blank' class='project'>
        <div class='title'>
            <h1>${project.id}. </h1>
            <h1>${project.name}</h1>
        </div>
        <div class='icons'>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg>    
        </div>
    </a>`
  )
  .join("");
