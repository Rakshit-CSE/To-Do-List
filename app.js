// Creating a new Todo item
$('#inp').keypress(function(e)
{
    //console.log(e.which);
    if(e.which===13)
    {
        const todoText = $('#inp').val();
        $('#list').append(`<li><span><i class="fas fa-trash-alt"></i></span> ${todoText}</li>`);
        $('#inp').val("");
    }
});

// Mark the todo as completed
$('ul').on('click','li',function(){
    $(this).toggleClass('completed');
});

//Remove list item
$('#list').on('click','span',function(e){
    $(this).parent().fadeOut(700,function(){
        $(this).remove();
    });
    e.stopPropagation();x
});

//Adding function to plus sign
$('#plus').click(function () {
    $('#inp').fadeToggle();
})
