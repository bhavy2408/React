import { Link, Outlet, useLocation } from 'react-router'

const products = [
  { path: 'oldproduct', label: 'Classic collection', badge: 'THE ORIGINAL', title: 'The foundations kit', description: 'A friendly starting point for learning the building blocks of the web.', color: 'product-art-purple', icon: '</>' },
  { path: 'newproduct', label: 'Fresh release', badge: 'JUST ADDED', title: 'The modern web kit', description: 'A hands-on set of projects for bringing modern ideas to life.', color: 'product-art-blue', icon: '{ }' },
]

function Product() {
  const location = useLocation()
  const onProductIndex = location.pathname.replace(/\/$/, '').toLowerCase() === '/product'

  return (
    <main className="page product-page">
      <section className="container py-5 py-lg-6">
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
          <div><span className="badge rounded-pill text-bg-light border px-3 py-2 mb-3">ROUTE2 PICKS</span><h1 className="display-5 fw-bold product-title mb-2">Find your next <span>starting point.</span></h1><p className="text-secondary mb-0">A couple of practical ways to keep your learning moving.</p></div>
          {!onProductIndex && <Link className="btn btn-outline-dark rounded-pill px-4" to="/product">← All products</Link>}
        </div>
        <div className="d-flex flex-wrap gap-2 mb-4" aria-label="Product categories">
          <Link className={`btn rounded-pill px-4 ${onProductIndex ? 'btn-dark' : 'btn-outline-secondary'}`} to="/product">All products</Link>
          <Link className={`btn rounded-pill px-4 ${location.pathname.toLowerCase().endsWith('/oldproduct') ? 'btn-dark' : 'btn-outline-secondary'}`} to="/product/oldproduct">Classic collection</Link>
          <Link className={`btn rounded-pill px-4 ${location.pathname.toLowerCase().endsWith('/newproduct') ? 'btn-dark' : 'btn-outline-secondary'}`} to="/product/newproduct">Fresh release</Link>
        </div>
        {onProductIndex ? <div className="row g-4">{products.map((product) => <div className="col-md-6" key={product.path}><article className="card h-100 border-0 shadow-sm product-card"><div className={`product-art ${product.color}`}><span className="product-art-icon">{product.icon}</span><span className="badge rounded-pill text-bg-light">{product.badge}</span></div><div className="card-body p-4"><span className="small text-uppercase text-secondary fw-semibold">{product.label}</span><h2 className="h3 fw-bold mt-2">{product.title}</h2><p className="text-secondary">{product.description}</p><Link className="btn btn-dark rounded-pill px-4 mt-2" to={`/product/${product.path}`}>Explore collection <span aria-hidden="true">↗</span></Link></div></article></div>)}</div> : <Outlet />}
      </section>
    </main>
  )
}

export default Product
