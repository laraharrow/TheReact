const ce = React.createElement;
const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
};
const MyFirstComponent = function() {
  return ce('div', { id: 'my-first-component' }, [
    ce(MyTitle, { title: 'Sence8', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'GreenYellow' }),
    ce(MyTitle, { title: 'Silicon Valley', color: 'limeGreen' }),
    ce(MyTitle, { title: 'Skin War', color: 'peru' })
  ]);
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
