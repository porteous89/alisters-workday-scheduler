
$(function () {
  const currentDay = dayjs().format("dddd, MMMM D, YYYY");
  document.getElementById("currentDay").innerHTML = currentDay;
  });
  const businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
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
  $(".saveBtn").on("click", function () {
    let textarea = $(this).prev(".description");
    let text = textarea.val();
    let hour = $(this).prevAll(".hour").text();
    localStorage.setItem(hour, text);
    $('#output').html('File Saved!');
    setTimeout(function () {
      $("#output").html("");
  }, 1000);
  });

  for (let i = 0; i < businessHours.length; i++) {
    const hour = businessHours[i];
    const text = localStorage.getItem(hour);
    $(`#hour-${i+9} .description`).val(text);
  }

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
