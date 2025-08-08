import { useState } from "react";
import { episodeList } from "./data"; // import episode list data

export default function App() {
  const [episodes] = useState(episodeList); // store into a variable
  const [selectedEpisode, setSelectedEpisode] = useState(); // keeps the selected episode in a state variable

  /** Detailed information on Episode */
  const EpisodeDetails = () => {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <img src="./imgs/darkechoes-logo.webp"></img>
          <p>Select an episode for details.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>- {selectedEpisode.title} -</h2>
        <img src={selectedEpisode.img} alt={selectedEpisode.title}></img>
        <p>{selectedEpisode.description}</p>
      </section>
    );
  };

  // list all episodes
  const ListEpisodes = () => {
    return (
      <section className="list">
        <h2>List of Episodes</h2>
        <ul className="list">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  };
  return (
    <>
      <header>
        <a href="index.html">
          <h1>DARK ECHOES</h1>
        </a>
      </header>
      <main>
        <ListEpisodes></ListEpisodes>
        <EpisodeDetails></EpisodeDetails>
      </main>
    </>
  );
}
