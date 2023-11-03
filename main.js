const scrollRevealOption={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header_container h1",{
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_form",{
    ...scrollRevealOption,
    delay: 500,
});

// trending container
ScrollReveal().reveal(".trending_card",{
    ...scrollRevealOption,
    interval: 500,
});

// destination container
ScrollReveal().reveal(".destination_card",{
    duration: 1000,
    interval: 500,
});

// seller container
ScrollReveal().reveal(".seller_card",{
...scrollRevealOption,
interval: 500,
});

// guide container
ScrollReveal().reveal(".guide_card",{
    ...scrollRevealOption,
    interval: 500,
    });

// client container
ScrollReveal().reveal(".client_card",{
    ...scrollRevealOption,
    interval: 500,
});
