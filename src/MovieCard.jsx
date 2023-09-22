import React, {useState} from 'react';

const MovieCard = ({movie}) => {

     const [isPlaying, setIsPlaying] = useState(false)

     const playVideo = () => {
       setIsPlaying(true)
     }

     const stopVideo = () => {
       setIsPlaying(false)
     }

    return (
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div onClick={playVideo}>
          <img
            src={
              movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://via.placeholder.com/400'
            }
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
        {isPlaying && (
          <div className="video-player">
            <video controls autoPlay onClick={stopVideo} onEnded={stopVideo}>
              <source
                src={`src/movie/Eternals.2021.720p.DSNP.IMAX.WEB-DL.DDP5.1.Atmos.H.264-AirForceOne.mkv/${movie.Eternals}`} // Replace with the actual file path of your locally stored video
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    )
}

export default MovieCard;