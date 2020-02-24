function loadContact() {
const main = document.querySelector("#main");
    main.innerHTML = "";
    const title = document.createElement("h1");
    title.id = "title";
    title.textContent = "Find Restaurant Jeremy Vuong";
    main.appendChild(title);
    const titlebody = document.createElement("p");
    titlebody.id = "titlebody";
    titlebody.textContent = "Established in 2020, Restaurant Jeremy Vuong is the fusion of world class food, romantic ambience and unparalled service - a setting truly reflective of its zero years of achievments.";
    main.appendChild(titlebody);
    const course1 = document.createElement("div");
    course1.classList.add("course2");
    main.appendChild(course1);
    const conus = document.createElement("h2");
    conus.classList.add("coursecontent");
    conus.textContent = "Contact us";
    course1.appendChild(conus);
    const reserve = document.createElement("h3");
    reserve.textContent = "Restaurant Reservations";
    course1.appendChild(reserve);
    const rnumber = document.createElement("p");
    rnumber.classList.add("dishend");
    rnumber.textContent = "0406837194";
    course1.appendChild(rnumber);
    const hire = document.createElement("h3");
    hire.textContent = "For hire";
    course1.appendChild(hire);
    const hnumber = document.createElement("p");
    hnumber.textContent = "0973826572";
    course1.appendChild(hnumber);
    const course2 = document.createElement("div");
    course2.classList.add("course2");
    main.appendChild(course2);
    const maincourse = document.createElement("h2");
    maincourse.classList.add("coursecontent");
    maincourse.textContent = "Opening hours";
    course2.appendChild(maincourse);
    const weekdays = document.createElement("h3");
    weekdays.textContent = "Weekdays";
    course2.appendChild(weekdays);
    const wrange = document.createElement("p");
    wrange.classList.add("dishend");
    wrange.textContent = "8am - 11pm"
    course2.appendChild(wrange);
    const weekend = document.createElement("h3");
    weekend.textContent = "Weekends";
    course2.appendChild(weekend);
    const erange = document.createElement("p");
    erange.textContent = "9am - 5pm"
    course2.appendChild(erange);
    const course3 = document.createElement("div");
    course3.classList.add("course2");
    main.appendChild(course3);
    const vmenu = document.createElement("h2");
    vmenu.classList.add("coursecontent");
    vmenu.textContent = "View Menus";
    course3.appendChild(vmenu);
    const alacarte = document.createElement("h3");
    alacarte.id = "alacarte";
    alacarte.textContent = "A La Carte";
    course3.appendChild(alacarte);
}

export { loadContact }
