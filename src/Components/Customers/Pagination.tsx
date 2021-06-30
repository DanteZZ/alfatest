import React from 'react';
function CustomersPagination() {
  return (
    <div className="pagination">
      <button className="button button__secondary button_active">1</button>
      <button className="button button__secondary">2</button>
      <button className="button button__secondary">...</button>
    </div>
  );
}

export default CustomersPagination;
