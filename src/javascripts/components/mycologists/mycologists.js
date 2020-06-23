const mycologistMaker = (mycologist) => {
  const domString = `  <div class="col-2">
  <div class="card">
   <div class="card-body">
    <div class="card-header">${mycologist.name}</div>
    <h5 class="card-title">${mycologist.age}</h5>
   </div>
  </div>
    `;
  return domString;
};

export default { mycologistMaker };
