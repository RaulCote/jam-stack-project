import React from 'react';
import Layout from '../components/Layout';

export const videos = [
  {
    title: 'E13',
    url: 'https://www.youtube.com/embed/SGEUrmu38xE',
  },
  {
    title: 'E10',
    url: 'https://www.youtube.com/embed/G8_rxc_autk',
  },
  {
    title: 'E4',
    url: 'https://www.youtube.com/embed/PuAlQ3P44TU',
  },
  {
    title: 'E3',
    url: 'https://www.youtube.com/embed/3uboaOCo1WA',
  },
];

export const VideosPageTemplate = () => (
  <section className="section">
    {videos.map((video, key) => {
      return (
        <React.Fragment key={key}>
          <h2 className={'video-title'}>{video.title}</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className={'video-iframe-container'}
          >
            <iframe
              title={'videos-iframe'}
              allowFullScreen={true}
              className={'video-iframe'}
              style={{ border: 'none' }}
              src={video.url}
            />
          </div>
        </React.Fragment>
      );
    })}
  </section>
);

const VideosPage = () => {
  return (
    <Layout>
      <VideosPageTemplate />
    </Layout>
  );
};

export default VideosPage;
