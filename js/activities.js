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
