const handleSubmit = (event) => {
  event.preventDefault();

  const meal = $("#search-title").attr("data-meal");
  const day = $("#search-title").attr("data-day");
  const id = $("#search-title").attr("data-id");
  // const searchInput = $("#search-input").val();

  // const diet = $("#diet-input")
  //   .find(":checked")
  //   .map((each) => {
  //     return $(each).attr("id");
  //   });
  // console.log(diet);

  window.location.replace(
    `/mealplan/${id}/add/results?day=${day}&meal=${meal}`
  );
};

$("#meal-search").submit(handleSubmit);
