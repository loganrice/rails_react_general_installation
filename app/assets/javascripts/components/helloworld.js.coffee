OneTimeClickLink = React.createClass
  getInitialState: ->
    {clicked: false}
  linkClicked: (event) ->
    @setState(clicked: true)
  child: ->
    {
      false: React.DOM.a({href:"javascript:void(0)", onClick: @linkClicked}, "click me"),
      true: React.DOM.span({}, "You clicked the link")
    }[@state.clicked]
  render: ->
    React.DOM.div(
      {id: "one-time-click-link"},
      @child()
    )  
   
$ ->
  OneTimeClickLink = React.createFactory(OneTimeClickLink)

  React.render(
    OneTimeClickLink(),
    document.body
  )
