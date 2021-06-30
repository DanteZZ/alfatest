import React from 'react';
import CustomersHead from './Head';
import CustomersList from './List';
import CustomersPagination from './Pagination';
function Header() {
  return (
    <>
        <CustomersHead></CustomersHead>
        <CustomersList></CustomersList>
        <CustomersPagination></CustomersPagination>
    </>
  );
}

export default Header;
