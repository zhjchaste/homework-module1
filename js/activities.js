$(document).ready(function() {
  // Attach click event handler to activity cells
  $('table tbody tr td:not(:contains("Not Available"))').click(function() {
    // Check if the cell is already selected
    if ($(this).hasClass('selected')) {
      // Remove selection
      $(this).removeClass('selected');
      $(this).css('background-color', ''); 
    } else {
      // Add selection
      $(this).addClass('selected');
      $(this).css('background-color', '#9ed034'); 
    }
  });

  // Set cursor style to hand for selectable cells
  $('table tbody tr td:not(:contains("Not Available"))').css('cursor', 'pointer');
});

$(document).ready(function(){
  $("td").click(function() {
    var content = $(this).text();
    var column = $(this).index(); 
    var locations = $('thead tr th').slice(1).map(function() {
      return $(this).text();
    }).get();

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");
      if ($(this).hasClass("tdhighlight")) {
        $('#displaySelected').css("visibility", "visible");
        $('#displaySelected').css("margin-top", "2em");
        var location = locations[column - 1]; 
        $('#result').append("<p>" + content + " at " + location + "</p>"); 
      } else {
        $('#result p:contains(' + content + ')').remove();
        if ($('#result').has('p').length == false) {
          $('#displaySelected').css("visibility", "hidden");
          $('#displaySelected').css("margin-top", "0");
        }
      }
    }
  });
});


