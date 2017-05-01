$("#modal").hide();

$('#detroit').on('click', function(){
    $('#modal').show();
    $('#modal').load('../cities/detroit.html');   
});

$('#ann-arbor').on('click', function(){
    $('#modal').show();
});

$('#grand-rapids').on('click', function(){
    $('#modal').show();
});

$('#holland').on('click', function(){
    $('#modal').show();
});

$('#kalamazoo').on('click', function(){
    $('#modal').show();
});

$('#traverse-city').on('click', function(){
    $('#modal').show();
});

$('#charlevoix').on('click', function(){
    $('#modal').show();
});

$('#mackinac-island').on('click', function(){
    $('#modal').show();
});

$('#munising').on('click', function(){
    $('#modal').show();
});

$('#exit').on('click', function(){
	$('#modal').hide();
});