import { InfoOutlined, PlayArrow } from "@material-ui/icons"
import "./featured.scss"

export default function Featured({type}){
  return (
    <div className="featured">
    {type &&(
      <div className="category">
      <span>{type==="movie"? "Movies":"Series"}</span>
      <select name="genre" id="genre">
      <option> Genre</option>
      <option value="adventure">Adventure</option>
      <option value="comedy">Comedy</option>
      <option value="crime">Crime</option>
      <option value="horror">Horror</option>
      <option value="fantasy">Fantasy</option>
      <option value="romance">Romance</option>
      <option value="thriller">Thriller</option>
      </select>
      </div>
    )}
    <img src="https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_FMjpg_UX1000_.jpg"
      />
      <div className="info">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11bc8e04-92fc-42e6-85a7-46cedfe5b04e/dfqemx0-27619a4d-825e-4542-ad0b-e3dbd0d75631.png/v1/fill/w_1193,h_670/the_nun_2__2020__logo_by_mcjuggernuggets3_dfqemx0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTk0NyIsInBhdGgiOiJcL2ZcLzExYmM4ZTA0LTkyZmMtNDJlNi04NWE3LTQ2Y2VkZmU1YjA0ZVwvZGZxZW14MC0yNzYxOWE0ZC04MjVlLTQ1NDItYWQwYi1lM2RiZDBkNzU2MzEucG5nIiwid2lkdGgiOiI8PTM0NjUifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uMtSFlyd_l3IHwn1pE59iwjCuuTLpToYY9rKcnP2890"
        />
        <span className="desc">The Nun II is a 2023 American gothic supernatural horror film directed by Michael Chaves, with a screenplay written by Ian Goldberg, Richard Naing, and Akela Cooper from a story by Cooper.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>info</span>
          </button>
        </div>
      </div>
      </div>
  );
};

