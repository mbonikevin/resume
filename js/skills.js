const skills = [
  {
    id: 1,
    title: "React JS",
    img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    id: 2,
    title: "Node JS",
    img: "https://img.icons8.com/fluency/96/node-js.png",
  },
  {
    id: 3,
    title: "Express JS",
    img: "https://img.icons8.com/fluency/96/express-js.png",
  },
  {
    id: 4,
    title: "MongoDB",
    img: "https://img.icons8.com/color/96/mongo-db.png",
  },
  {
    id: 5,
    title: "Git",
    img: "https://img.icons8.com/color/96/git.png",
  },
  {
    id: 6,
    title: "Tailwind",
    img: "https://img.icons8.com/color/96/tailwindcss.png",
  },
  {
    id: 7,
    title: "Figma",
    img: "https://img.icons8.com/color/96/figma--v1.png",
  },
];

const skillSection = document.querySelector(".skills_grid");
skillSection.innerHTML = skills
  .map(
    (skill) =>
      `<div class='skill'>
          <div class='img'>
              <img src="${skill.img}" />
          </div>
          <div class=''>
              <h1>${skill.title}</h1>   
          </div>
      </div>`
  )
  .join("");
