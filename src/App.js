import React from 'react';
// import './App.module.scss'
import Button from "./components/Button/Button";
import styles from './App.module.scss'
function App() {

  return (
      <section className={styles.sorting}>
        <h2>Sort movies</h2>
          <div>
              <Button title="by likes"/>
              <Button title="by rating"/>
              <Button title="reset"/>
          </div>

      </section>

  );
}

export default App;
