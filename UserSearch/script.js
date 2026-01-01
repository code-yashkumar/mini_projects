const users =[
    {
        name: "Detective Cat",
        pic: "https://i.pinimg.com/736x/cf/c7/1e/cfc71eba39fd9b7424b58c55bba38f86.jpg",
        bio: "Independent and alert. Moves quietly and reads the world on its own terms."
    },
    {
        name: "Kunfu Panda",
        pic: "https://i.pinimg.com/1200x/46/24/31/4624310a8bab50391d99e5c4a3564a62.jpg",
        bio: "Calm and playful. Enjoys simple moments and a relaxed rhythm of life."
    },
    {
        name: "Peter Parker",
        pic: "https://i.pinimg.com/1200x/2f/d8/36/2fd836414b584ef9b4850ee0aff48d29.jpg",
        bio: "Agile and focused. Always in motion, driven by instinct and responsibility."
    },
    {
        name: "Howard Duck",
        pic: "https://i.pinimg.com/1200x/64/e8/18/64e8184b599c54bfa29634325bb13156.jpg",
        bio: "Expressive and bold. Known for strong reactions and unmistakable personality."
    },
    {
        name: "Detective Pikachu",
        pic: "https://i.pinimg.com/1200x/1e/40/e9/1e40e999f81f360ea4a2b2049e530698.jpg",
        bio: "Energetic and loyal. Brings warmth, power, and optimism everywhere."
    },
    {
        name: "Mr Bean",
        pic: "https://i.pinimg.com/1200x/01/39/0a/01390a4359e0a774414656dfb7bda12e.jpg",
        bio: "Observant and introspective. Expresses depth through subtle emotion."
    },
    {
        name: "Badshah",
        pic: "https://i.pinimg.com/736x/d2/2b/6b/d22b6ba3cef0966e0dbfc2b7cf84452b.jpg",
        bio: "Charismatic and iconic. A defining face of Indian cinema for decades."
    }
]

// to show all users initially
// to filter users based on search input
// to show filtered users


function showUsers  (userList) {
    userList.forEach((user) => {

        //create outer card div
        const card = document.createElement("div");
        card.classList = "card";

        //create img element
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        // create blurred layer div
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        //create content div
        const content = document.createElement("div");
        content.classList.add("content");

        //create h3 and paragraph 
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para= document.createElement("p");
        para.textContent = user.bio;

        //append h3 and paragraph to content div
        content.appendChild(heading);
        content.appendChild(para);

        // apeand all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        //finally append card to main container
        document.querySelector(".cards").appendChild(card);
    });
}
 
showUsers(users);

let inp=document.querySelector(".inp");
inp.addEventListener("input", function() {
    // console.log(inp.value);
    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().includes(inp.value.toLowerCase());
    });
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});