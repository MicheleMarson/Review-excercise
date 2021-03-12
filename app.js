// local data review
// usualy it is requested with ajax : NOTE
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "UI designer",
        img: "bb.jpg",
        text: `I'm a UI designer with the degree of University of Web 
                Development. I am pasioanate about what i am doing. I also like 
                to learn read books and learn new skills.`     
    },
    {
        id: 2,
        name: "alex lison",
        job: "Software developer",
        img: "cc.jpg",
        text: `I'm a Software developer with the degree of University of Web 
                Development. I am pasioanate about what i am doing. I also like 
                to learn play video games and read books.`   
    },
    {
        id: 3,
        name: "john black",
        job: "javascript engineer",
        img: "dd.jpg",
        text: `I'm a javascript engineer with the degree of University of Web 
                Development. I am pasioanate about what I am doing. I also like 
                to learn every day and improving my skills.`   
    }
];

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

// show person baset on item
function showPerson(person){
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    img.src = item.img;
}

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show previous person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// show random person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})