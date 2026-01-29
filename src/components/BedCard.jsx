
import Link from "next/link";

export default function BedCard({ bed, isVariant }) {
  return (
    <div className="card">
      {isVariant ? (
        <img src={bed.image} alt="Bed variant" />
      ) : (
        <img src={bed.image} alt={bed.title} />
      )}

      <div className="card-content">
        <div className="card-title">
          {isVariant ? `₹ ${bed.price.toLocaleString("en-IN")}` : bed.title}
        </div>

        {!isVariant && <p className="card-desc">{bed.description}</p>}

        {!isVariant && (
          <div className="specs">
            <div className="spec-row">
              <span className="spec-label">Size:</span> {bed.size}
            </div>
            <div className="spec-row">
              <span className="spec-label">Capacity:</span> {bed.capacity}
            </div>
          </div>
        )}
        
        <Link href={`/bed/${bed.id}`} className="btn">
          Select Bed
        </Link>
      </div>
    </div>
  );
}

