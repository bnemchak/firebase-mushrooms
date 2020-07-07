const mushroomMaker = (mushroom) => {
  const domString = `
    <div class="col-3">
      <div class=card border-0 rounded-0 bg-dark text-light" id=${mushroom.id}>
          <div class="card-header">${mushroom.name}</div>
          <div class="card-body">
          <h5 class="card-title">${mushroom.location}</h5>
          <p class="card-text">Mushroom Size <b>${mushroom.size}</b> and weighs <b>${mushroom.weight}</b> grams</p>
        </div>
      </div>
    </div>
  `;
  return domString;
};

export default { mushroomMaker };
