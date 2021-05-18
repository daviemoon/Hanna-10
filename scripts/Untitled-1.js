//Get modal element
{var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
//Listen for outside click
window.addEventListener('click', clickOutside);

//Function to open modal
function openModal() {
    modal.style.display= 'block';
}

//Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//Function to close modal if outside click
function clickOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
}
}
}


<div id= "museum">
<h1> Visit  the  museum </h1>
</div>

.right{
    width: 44vw;
    display: grid;
    margin-top: 4%;
    margin-left: 3%;
    background-color:red;
    margin-right: 3%;
    gap: 6%;
    grid-template-columns: repeat(auto-fit, minmax(179.5px,1fr))
}

margin-top: 4%;
margin-left: 3%;
margin-right: 3%;