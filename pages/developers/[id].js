import React from 'react';
import styles from '../../styles/Details.module.css';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(dev => ({
    params: { id: dev.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const data = await res.json();

  return {
    props: { dev: data }
  };
};

const DevDetails = ({ dev }) => {
  return (
    <div className={styles.container}>
      <h2>{dev.name}</h2>
      <p><strong>Email:</strong> {dev.email}</p>
      <p><strong>Website:</strong> {dev.website}</p>
      <p><strong>Company:</strong> {dev.company.name}</p>
      <p><strong>City:</strong> {dev.address.city}</p>
    </div>
  );
};

export default DevDetails;