export default function VariantCard({ variant }) {
  return (
    <div className="card">
      <img src={variant.image} alt="Bed variant" />

      <div className="card-content">
        <div className="card-title">
          ₹ {variant.price.toLocaleString("en-IN")}
        </div>

        <ul className="specs">
          {variant.features.map((feature, index) => (
            <li key={index} className="spec-row">
              • {feature}
            </li>
          ))}
        </ul>

        <button className="btn">Buy Now</button>
      </div>
    </div>
  );
}
