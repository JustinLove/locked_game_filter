(function() {
  model.lockedGameFilter = ko.observable('open').extend({local: 'locked_game_filter'})

  var baseFilteredGameList = model.filteredGameList
  model.filteredGameList = ko.computed(function() {
    switch (model.lockedGameFilter()) {
      case 'open': return baseFilteredGameList().filter(function(game) {
          return !game.locked
        })
      case 'locked': return baseFilteredGameList().filter(function(game) {
          return game.locked
        })
      default: return baseFilteredGameList()
    }
  })
  model.filteredGameList.previous = baseFilteredGameList

  $.get('coui://ui/mods/locked_game_filter/locked_game_filter.html', function(html) {
    var $html = $(html)
    ko.applyBindings(model, $html[0])
    $('.section_controls .form-group:last').after($html[0])
  })
})()
