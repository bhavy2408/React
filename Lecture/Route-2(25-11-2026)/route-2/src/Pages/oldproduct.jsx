import { Link } from 'react-router'

function Oldproduct() {
  return (
    <article className="card border-0 shadow-sm overflow-hidden product-detail-card">
      <div className="row g-0 align-items-stretch">
        <div className="col-lg-5"><div className="product-detail-art product-art-purple"><span className="product-art-icon">&lt;/&gt;</span><span className="badge rounded-pill text-bg-light">THE ORIGINAL</span></div></div>
        <div className="col-lg-7"><div className="card-body p-4 p-lg-5"><span className="small text-uppercase text-secondary fw-semibold">CLASSIC COLLECTION</span><h2 className="display-6 fw-bold mt-2">The foundations kit</h2><p className="lead text-secondary">Start with the essentials and build confidence one page at a time.</p><p className="text-secondary">A guided collection for learning how the web works, from structuring content with HTML to styling it with CSS and making it interactive with JavaScript.</p><ul className="list-unstyled d-grid gap-2 my-4"><li>✓ Clear, beginner-friendly lessons</li><li>✓ Small projects to practice as you go</li><li>✓ A solid base for your next step</li></ul><div className="d-flex flex-wrap gap-2"><Link className="btn btn-dark rounded-pill px-4" to="/contact">Ask about this kit <span aria-hidden="true">↗</span></Link><Link className="btn btn-outline-secondary rounded-pill px-4" to="/product/newproduct">See the new release</Link></div></div></div>
      </div>
    </article>
  )
}

export default Oldproduct
