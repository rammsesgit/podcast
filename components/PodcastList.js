import Link from 'next/link'

export default class PodcastList extends React.Component {
  render() {
    const {audioClips} = this.props

    return <div>
      <h2>Últimos podcast</h2>
      { audioClips.map((clip, index) => (
        <Link key={index} href={`/podcast?id=${clip.id}`}>
            <a className="podcast">{ clip.title }</a>
        </Link>
      )) }

      <style jsx>{`
        h2 {
          text-align: center;
        }
        .podcast {
          display: block;
          text-decoration: none;
          color: #333;
          padding: 15px;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .podcast:hover {
          color: #000;
        }
      `}</style>
    </div>
  }
}