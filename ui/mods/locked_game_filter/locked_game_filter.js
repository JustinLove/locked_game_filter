(function() {
  var baseFilteredGameList = model.filteredGameList
  model.filteredGameList = ko.computed(function() {
    return baseFilteredGameList().filter(function(game) {
      return !game.locked
    })
  })
  model.filteredGameList.previous = baseFilteredGameList
})()
