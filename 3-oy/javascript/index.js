const dropdown=document.querySelector('.dropdown-css'),
pushContact=document.querySelector('.contact_list')


pushContact.addEventListener('click',function(){
    dropdown.classList.toggle('after_push')
})
console.log(pushContact);