//using day.js to get the current date and formatting how its displayed
$(function () {
  const currentDay = dayjs().format("dddd, MMMM D, YYYY");
  document.getElementById("currentDay").innerHTML = currentDay;
  });
  // array of times available to be booked (9-5)
  const businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  //for loop creates time blocks, styling and save button
  for (let i = 0; i < businessHours.length; i++) {
    const hour = businessHours[i];
    const timeBlock = `<div class="row time-block" id="hour-${i+9}">
                       <div class="col-md-2 col-2 hour text-center py-3">${hour}</div>
                       <textarea class="col-md-8 col-8 description" rows="3"></textarea>
                       <button class="btn saveBtn col-md-2 col-2" aria-label="save">
                         <i class="fas fa-save" aria-hidden="true"></i>
                       </button>
                     </div>`;
    $("#calendar").append(timeBlock);
  }
//added event listener to button, when clicked saves text to local storage
  $(".saveBtn").on("click", function () {
    let textarea = $(this).prev(".description");
    let text = textarea.val();
    let hour = $(this).prevAll(".hour").text();
    localStorage.setItem(hour, text);
  // added file saved message, disappears after 1 second
    $('#output').html('File Saved!');
    setTimeout(function () {
      $("#output").html("");
  }, 1000);
  });
//retrieves text from local storage and displays it in correct text area
  for (let i = 0; i < businessHours.length; i++) {
    const hour = businessHours[i];
    const text = localStorage.getItem(hour);
    $(`#hour-${i+9} .description`).val(text);
  }
//use day.js to get current hour, then loop through 9-5, compare times and color depending on outcome
  const currentHour = dayjs().hour();
  for (let i = 9; i <= 17; i++) {
    const timeBlock = $(`#hour-${i}`);
    if (i < currentHour) {
      timeBlock.addClass("past");
    } else if (i === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }
  };
