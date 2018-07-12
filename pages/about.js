export default class extends React.Component {
  render() {
    return <div>
      <img src="/static/ardilla.jpg"/>
      <h1>ardilla :v</h1>
      <p>Necesaria para la app</p>

      <style jsx="jsx">
        {
          ` :global(body) {
            background: #1d1d1d;
          }
           `
        }</style>
    </div>
  }
}
