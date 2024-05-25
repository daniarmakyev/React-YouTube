import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideoType, useAppDispatch, useAppSelector } from '../../helpers/types';
import { getVideoById } from '../../Store/Videos/Videos.action';

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { video } = useAppSelector((state) => state.videos);
  const [cleanedHTML, setCleanedHTML] = useState<string>('');
  const [videos, setVideos] = useState<VideoType>({
    title: '',
    description: '',
    likes_count:'',
    uploaded_at:'',
    file: '',
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    dispatch(getVideoById(id!));
  }, [dispatch, id]);

  useEffect(() => {
    if (video && Object.keys(video).length !== 0) {
      setVideos({
        title: video.title || '',
        description: video.description || '',
        likes_count: video.likes_count || '',
        uploaded_at: video.uploaded_at || '',
        file: video.file || '',
      });

      if (video.file) {
        const cleaned = video.file.replace(/"/g, '');
        setCleanedHTML(cleaned);
      }

      setLoading(false);
    }
  }, [video]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mainContent'>
      {cleanedHTML && <div dangerouslySetInnerHTML={{ __html: cleanedHTML }}></div>}
      <section>
        <h3>{videos.title}</h3>
        <p>{videos.description}</p>
        <p>Likes: {videos.likes_count}</p>
      </section>
    </div>
  );
};

export default DetailView;
