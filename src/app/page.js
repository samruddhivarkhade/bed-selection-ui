import BedCard from "../components/BedCard";
import { beds } from "../data/beds";

export default function Home() {
  return (
    <div className="container">
      <h1 className="main-heading">
        Choose your Perfect Bed
      </h1>
      <h2 className="heading">
        Find the ideal bed size for your space and comfort needs
      </h2>

      <div className="cards">
        {beds.map((bed) => (
          <BedCard key={bed.id} bed={bed} />
        ))}
      </div>
    </div>
  );
}
