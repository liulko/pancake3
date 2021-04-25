let onClickImg = document.getElementById("phone-chevron");
document.body.addEventListener("click", function (event) {
    if (event.target === onClickImg) {
    document.getElementById("header__contacts-phones-list-id0").style.opacity = "1";}
    else {
        if (event.target !==  document.getElementById("header__contacts-phones-list-id0") && event.target !==  document.getElementById("header__contacts-phones-list-id1") && event.target !==  document.getElementById("header__contacts-phones-list-id2") && event.target !==  document.getElementById("header__contacts-phones-list-id3") )
        document.getElementById("header__contacts-phones-list-id0").style.opacity = "0";
    }
})
