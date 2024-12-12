import React from 'react';
import entreprises from '../../constants/config/entreprises';
import Table from '../../components/table/Table';

const Entreprises = () => {
  const cols = [
    {
      title: 'Code',
    },
    {
      title: 'Name',
    },
    {
      title: 'Status',
      default: '-',
    },
  ];

  return (
    <div className="px-4">
      <Table cols={cols} data={entreprises} striped hover />
    </div>
  );
};

export default Entreprises;
