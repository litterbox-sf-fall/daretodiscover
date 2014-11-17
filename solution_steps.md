- rails new daretodiscover
- rails generate controller wine index
- add `root 'wine#index'` to `routes.rb`
- rename wine.coffee to wine.js and remove coffeescript-style comments
- use `$.getJSON()` to load wine data and log it to console
- ponder how i could loop through `data` and render the results with
  javascript and decide i don't want to do that. decide to use
  handlebars templates instead.
- add `gem 'handlebars_assets'` to Gemfile
- run `bundle install`
