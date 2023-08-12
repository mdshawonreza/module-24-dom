const sections=document.querySelectorAll('section');
for(const section of sections){

    section.style.border='5px solid blue';
    section.style.marginBottom='8px';
    section.style.borderRadius='15px';
    section.style.paddingLeft='10px';
    section.style.backgroundColor='lightGray';
}
// const placesContainer=document.getElementById('places-container');
// placesContainer.style.backgroundColor='lightGreen';
const placesContainer=document.getElementById('places-container');
placesContainer.classList.add('text-center');
