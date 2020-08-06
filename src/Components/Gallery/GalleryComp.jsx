import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const PHOTO_SET = [
    {
      original: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-messi.jpg',
      thumbnail: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-messi.jpg',
    },
    {
      original: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-kaka.jpg',
      thumbnail: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-kaka.jpg',
    },
    {
      original: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-arsenal-chelsea.jpg',
      thumbnail: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-arsenal-chelsea.jpg',
    },
    {
      original: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-juventus-roma.jpg',
      thumbnail: 'https://www.fifplay.com/img/public/fifa-12-wallpaper-juventus-roma.jpg',
    },
    {
      original: 'https://wallpapercave.com/wp/wp2375304.jpg',
      thumbnail: 'https://wallpapercave.com/wp/wp2375304.jpg',
    },
    {
      original: 'https://wallpapercave.com/wp/wp2375324.jpg',
      thumbnail: 'https://wallpapercave.com/wp/wp2375324.jpg',
    },
    {
      original: 'https://wallpapercave.com/wp/wp2294714.jpg',
      thumbnail: 'https://wallpapercave.com/wp/wp2294714.jpg',
    },
    {
      original: 'https://wallpapercave.com/wp/wp2375391.jpg',
      thumbnail: 'https://wallpapercave.com/wp/wp2375391.jpg',
    },
    {
      original: 'https://wallpapercave.com/wp/wp2375435.png',
      thumbnail: 'https://wallpapercave.com/wp/wp2375435.png',
    },
  ];
const GalleryComp = () => {
    return (
        <div>
	    <ImageGallery items={PHOTO_SET} />
        </div>
    );
}

export default GalleryComp;