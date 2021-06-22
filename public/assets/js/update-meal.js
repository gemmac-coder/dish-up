const handleUpdateSearch = async (event) => {
  event.preventDefault();

  const meal = $("#search-title").attr("data-meal");
  const day = $("#search-title").attr("data-day");
  const id = $("#search-title").attr("data-id");
  const dayId = $("#search-title").attr("data-dayId");

  const searchInput = $("#search-input").val();
  const diet = $("#diet-input")
    .find(":checked")
    .map((i, each) => {
      return $(each).attr("id");
    })
    .get();
  const intolerance = $("#intolerance-input")
    .find(":checked")
    .map((i, each) => {
      return $(each).attr("id");
    })
    .get();

  window.location.replace(
    `/mealplan/${id}/update/results?day=${day}&meal=${meal}&dayId=${dayId}&searchInput=${searchInput}&diet=${diet}&intolerance=${intolerance}`
  );
};

const handleUpdate = async (event) => {
  event.preventDefault();

  const card = event.target;

  const mealPlanId = $('[name="updateMeal"]').attr("id");
  const day = $("#search-title").attr("data-day");
  const meal = $("#search-title").attr("data-meal");
  const dayId = $("#search-title").attr("data-dayId");
  const spoonacularId = $(card).attr("data-id");
  const title = $(card).attr("data-title");
  const readyInMinutes = $(card).attr("data-ready");
  const servings = $(card).attr("data-servings");
  const image = $(card).attr("data-image");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify({
      spoonacularId,
      title,
      readyInMinutes,
      servings,
      image,
    }),
  };
  const postResponse = await fetch(`/api/meals`, options);
  const mealData = await postResponse.json();
  console.log(mealData);

  if (postResponse.status !== 200) {
    console.error("Failed to add meal");
  } else {
    if (!dayId) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        body: JSON.stringify({
          day,
        }),
      };
      // const response = await fetch(`/api/days`, options);
    }

    // window.location.replace(`/mealplan/${mealPlanId}`);
  }
};

const handleUpdateViewClick = (event) => {
  const mealId = event.currentTarget.id;

  window.location.replace(`/recipe?mealId=${mealId}`);
};

$("#update-search").submit(handleUpdateSearch);
$("#updateSearchResults").click(handleUpdate);
$('[name="update-view-btn"]').click(handleUpdateViewClick);