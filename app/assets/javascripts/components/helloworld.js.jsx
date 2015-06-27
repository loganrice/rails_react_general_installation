class Note extends React.Component{
  render(){
    return (
        <div>
          <h1>Hello World</h1>
          <p>this might work</p>
        </div>
    )
  }
};

$(document).on('ready page:load', function() {
  React.render(
    <Note />, 
    document.getElementById('hello-world')
  );
});
