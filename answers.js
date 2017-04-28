$('.profile-image').attr('src', 'https://placebear.com/400/400');

$('#left-image img').attr('src', 'https://placebear.com/325/225');

$('h1.highlight').text('ilia demertchian');

$('#employment .info-title').text('LOL');

$('#time-travel').parent().remove();

$('body').css('background-color', 'red');

$('.highlight').css('color', 'lime');

$('h1').css('font-family', 'monospace');

$('.action-icon-bg').css('background-color', 'blue');

$('#name').attr('placeholder', 'Identify yourself');

$('#message').attr('placeholder', 'State your business');

$('#name').attr('value', 'your nemesis');

$('#email').attr('value', 'koalathebear@gmail.com');

$('#submit').val('en garde!');

// bonus

$('#submit').attr('disabled', true);

$('.bio-info-item').empty();

$('#right-image img').clone().appendTo('.portfolio-container');

for (i = 0; i < 10;i++) { $('#right-image img').clone().appendTo('.portfolio-container'); }


var biolist = document.createElement('li');
var biospan1 = document.createElement('span');
var biospan2 = document.createElement('span');
biolist.appendChild(biospan1);
biolist.appendChild(biospan2);
$(biolist).appendTo('.bio-info');
$(biolist).attr('class', 'bio-info-item');
$(biospan1).attr('class', 'bio-info-title');
$(biospan2).attr('class', 'bio-info-value bio-info-name');
$(biospan1).text('date');
$(biospan2).text(d);
