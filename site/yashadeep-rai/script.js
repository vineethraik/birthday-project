const text = document.getElementById("greetings");
const button= document.getElementById("wish_button");

const make_url=(str)=>{
    return `https://api.whatsapp.com/send?phone=918618130736&text=${encodeURI(str)}`;
};

const update_anchor=()=>{
    button.setAttribute("href",make_url(text.value));
};

text.addEventListener("input",()=>{
    update_anchor();
});



const newLocal = text.textContent = `Wishing you many more happy returns of the day Yashadeep ❤️ 🤩 🎊 💥 💫 🥳 🎁. May God bless you and full-fill all your dreams 🥳 🥳 🤩 🎂 🥳 🥳. Have a Extraordinary Fantastic future ahead ❤️ 🤩.`;
update_anchor();