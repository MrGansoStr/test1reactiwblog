import ReactPlayer from 'react-player'
export const Videotutorials = () => {
  return (
    <>
    <div className="container-xl">
      <ReactPlayer url={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
      width="100%" height="300px" controls/>
    </div>
    </>
  )
}