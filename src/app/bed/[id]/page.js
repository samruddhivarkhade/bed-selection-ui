import { beds } from "../../../data/beds";

export default async function BedDetails({ params }) {
  const { id } = await params;   
  const bed = beds.find((b) => b.id === id);

  if (!bed) {
    return <h2 className="heading">Bed not found</h2>;
  }

  return (
    <div className="container">
      <h1 className="main-heading">{bed.title}</h1>

      <div className="cards">
        {bed.variants.map((variant, index) => (
          <div key={index} className="card">
            <img src={variant.image} alt={bed.title} />

            <div className="card-content">
              <div className="card-title">
                ₹ {variant.price.toLocaleString("en-IN")}
              </div>

              <ul className="specs">
                {variant.features.map((f, i) => (
                  <li key={i} className="spec-row">• {f}</li>
                ))}
              </ul>

              <button className="btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
