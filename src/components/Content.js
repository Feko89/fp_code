import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Ucivo.css';  // Pridaj CSS pre tento komponent

const Ucivo = () => (
  <><div id="content">
  <h2>Úvod do programovania</h2>
  <p>Learn Python, a popular programming language, from basics to advanced topics.</p>
  <button class="btn btn-success">Start learning Python now</button>
  <h3>Example</h3>
  <pre><code>print("Hello, World!")</code></pre>
  <button class="btn btn-primary">Try it Yourself</button>
</div>
</>);

export default Ucivo;