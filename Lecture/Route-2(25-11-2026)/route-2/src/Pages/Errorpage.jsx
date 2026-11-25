import { Link, useRouteError } from 'react-router'

function Errorpage() {
  const error = useRouteError()
  const isRouteError = Boolean(error)

  return (
    <main className="container py-5">
      <div className="row justify-content-center align-items-center min-vh-75 text-center">
        <div className="col-md-9 col-lg-7">
          <div className="error-code mb-3">{isRouteError ? 'OOPS' : '404'}</div>
          <span className="badge rounded-pill text-bg-light border px-3 py-2">{isRouteError ? 'SOMETHING WENT WRONG' : 'PAGE NOT FOUND'}</span>
          <h1 className="display-5 fw-bold mt-4">{isRouteError ? 'This page hit a detour.' : 'Looks like a wrong turn.'}</h1>
          <p className="lead text-secondary mx-auto mb-4">{isRouteError ? 'We couldn’t load this page right now. Try heading back and taking another route.' : 'The page you’re looking for may have moved, or the address might be a little off.'}</p>
          <div className="d-flex justify-content-center flex-wrap gap-2"><Link className="btn btn-dark rounded-pill px-4 py-2" to="/">Back to home</Link><Link className="btn btn-outline-secondary rounded-pill px-4 py-2" to="/product">Browse products</Link></div>
          {isRouteError && error?.statusText && <p className="small text-secondary mt-4">{error.statusText}</p>}
        </div>
      </div>
    </main>
  )
}

export default Errorpage
