#General Installation Instructions

1. Add 'react-rails' to the project's Gemfile:
  ```ruby
  gem 'react-rails'
  ```
2. Specify what React library to use. React comes with two variants:
  * Production - removes browser console debugging messages
  ```ruby
  #config/environments/production.rb
  config.react.variant = :production

  #config/environments/development.rb
  config.react.variant = :development

  #config/environments/test.rb
  config.react.variant = :development
  ```
3. Use React addons to provide a means for testing react components
  ```ruby
  #config/application.rb
  config.react.addons = true
  ```
4. Add react to application.js
  ```ruby
  #app/assets/javascripts/application.js
  //= require react
  ```
