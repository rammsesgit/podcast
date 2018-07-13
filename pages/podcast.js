import 'isomorphic-fetch'
import Error from 'next/error'
import Layout from '../components/Layout'
import Podcast from '../components/Podcast'

export default class extends React.Component {

  static async getInitialProps ({ query }) {
    let id = query.id
    let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`)
    let clip = (await fetchClip.json()).body.audio_clip
    return { clip }
  }

  render() {
    const { clip } = this.props

    return <Layout>
      <Podcast clip={ clip }/>
    </Layout>
  }
}