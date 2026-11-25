import { Link } from 'react-router'

function Newproduct() {
  return (
    <article className="card border-0 shadow-sm overflow-hidden product-detail-card">
      <div className="row g-0 align-items-stretch">
        <div className="col-lg-5"><div className="product-detail-art product-art-blue"><span className="product-art-icon">{'{ }'}</span><span className="badge rounded-pill text-bg-light">JUST ADDED</span></div></div>
        <div className="col-lg-7"><div className="card-body p-4 p-lg-5"><span className="small text-uppercase text-secondary fw-semibold">FRESH RELEASE</span><h2 className="display-6 fw-bold mt-2">The modern web kit</h2><p className="lead text-secondary">Turn what you know into useful, polished experiences.</p><p className="text-secondary">A project-first collection for taking the next step with component-based interfaces, responsive layouts, and the habits that help you ship confidently.</p><ul className="list-unstyled d-grid gap-2 my-4"><li>✓ Build responsive, component-based pages</li><li>✓ Practice with realistic mini projects</li><li>✓ Learn a repeatable process for shipping</li></ul><div className="d-flex flex-wrap gap-2"><Link className="btn btn-dark rounded-pill px-4" to="/contact">Ask about this kit <span aria-hidden="true">↗</span></Link><Link className="btn btn-outline-secondary rounded-pill px-4" to="/product/oldproduct">See the classic collection</Link></div></div></div>
      </div>
    </article>
  )
}

export default Newproduct
