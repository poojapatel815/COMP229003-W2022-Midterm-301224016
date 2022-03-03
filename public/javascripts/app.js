/*-----------------Student Information------------*/
/*----------------

Student Name:Patel Poojaben Ghanshyambhai
Student Id:301224016
Date:04/03/2022

------------------*/



console.log('Goes to the client side.');

if(getTitle == "Movie List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}