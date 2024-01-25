import React, { useState } from 'react';

const Problem1 = () => {
  const [show, setShow] = useState('active');
  const [data, setData] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const status = form.status.value;

    setData([...data, { name: name, status: status }]);
  };

  const handleClick = (val) => {
    if (val === 'all') {
      setShow('all');
    } else {
      setShow(val);
    }
  };

  const sortedData = () => {
    if (show === 'all') {
      return data.sort((a, b) => {
        const statusOrder = {
          'active': 1,
          'completed': 2,
          'pending': 3,
          'archive': 4,
        };

        return statusOrder[a.status] - statusOrder[b.status];
      });
    } else {
      return data.filter(item => item.status === show);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={(e) => handleOnSubmit(e)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'all' && 'active'}`}
                type="button"
                onClick={() => handleClick('all')}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'active' && 'active'}`}
                type="button"
                onClick={() => handleClick('active')}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'completed' && 'active'}`}
                type="button"
                onClick={() => handleClick('completed')}
              >
                Completed
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'pending' && 'active'}`}
                type="button"
                onClick={() => handleClick('pending')}
              >
                Pending
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === 'archive' && 'active'}`}
                type="button"
                onClick={() => handleClick('archive')}
              >
                Archive
              </button>
            </li>
          </ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedData().map((item, index) => (
                <tr key={index}>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
